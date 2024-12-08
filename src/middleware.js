import {NextResponse} from 'next/server';

const userRoutes = {
    admin: [
        '/user/dashboard'
    ],
    user: [
        '/user/orders'
    ],
};

export const middleware = (request) => {
    const pathVariable = request.nextUrl.pathname;
    const allowedUnauthenticatedRoutes = [
        '/registration',
        '/login',
    ];

    // Get authentication and user type from cookies
    const authCookie = request.cookies.get("token");
    const typeCookie = request.cookies.get("type");
    // const updateCookie = request.cookies.get("updated");
    const auth = authCookie ? authCookie.value : null;
    const userType = typeCookie ? atob(typeCookie.value) : null;
    // const update = updateCookie ? atob(updateCookie.value) : null;

    // Map user type to internal representation
    const mappedUserType = userRoutes[userType] ? userType : null;
    // Redirect if not authenticated and trying to access a protected route
    if (!auth && pathVariable.startsWith('/user')) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if (!auth && pathVariable.startsWith('/checkout')) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Redirect authenticated users trying to access routes reserved for unauthenticated users
    if (allowedUnauthenticatedRoutes.includes(pathVariable) && auth) {
        return NextResponse.redirect(new URL("/user/dashboard", request.url));
    }

    // Check if user type and route access are valid
    if (mappedUserType && userRoutes[mappedUserType]) {
        // Check if the path matches any exact route or starts with any base path in the user's allowed routes
        const allowedRoutes = userRoutes[mappedUserType];
        const isAllowedRoute = allowedRoutes.some(route => pathVariable === route || pathVariable.startsWith(route));

        if (isAllowedRoute) {
            // Allow access to the route
            return NextResponse.next();
        }
    }

    // Redirect to dashboard if access is not granted
    return NextResponse.redirect(new URL("/user/dashboard", request.url));
};

export const config = {
    matcher: ['/user/:path*', '/checkout/:path*'],
};
