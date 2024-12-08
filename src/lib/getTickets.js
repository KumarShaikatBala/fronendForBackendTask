import serverFetch from "@/fetch/server";
export default async function getTickets() {
    return await serverFetch('dos/dos-support-ticket');
}