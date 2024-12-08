import {useAuth} from "@/context/AuthContext";
import Loading from "@/app/components/common/Loading";


export function WithAuthPermission(WrappedComponent, allowedRoles, userPermissions) {
    return function WithAuthPermission(props) {
        const {role, isLoading} = useAuth();
        const userRole = role;
        if (isLoading) {
            return <div className='text-center'>
                <h6 className='text-indigo-600'>Please Wait</h6>
                <Loading/>
                <h6>
                    Hang on
                    Loading...
                </h6>
            </div>;
        } else {
            if (allowedRoles.includes(userRole)) {
                return <WrappedComponent {...props} />;
            } else {
                return <div className='text-center'>Unauthorized Access</div>;
            }
        }
    }
}


