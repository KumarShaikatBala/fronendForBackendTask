"use client";
import {useState} from "react";
import {CircularProgress, Dialog, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import customFetch from "@/fetch/api";
import {Delete} from "@mui/icons-material";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
export default function DeleteFunction({url, id, title}) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const deleteUrl = `${url}/${id}`;
    const handleClose = () => setOpen(false);
    const handleDelete = async () => {
        setLoading(true);
        await customFetch(deleteUrl, {
            method: "DELETE",
        }).then((response) => {
            if (response.status) {
                setLoading(false);
                setOpen(false);
                if (response.status=='error'){
                    toast(response.data)
                }
                else {
                    toast.warning(title + " deleted successfully");
                    router.refresh()
                }
            } else {
                setLoading(false);
                toast.error("Something went wrong");
            }
        })
            .catch((error) => {
                setLoading(false);
                toast.error("Something went wrong");
            });
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="text-red-400 border hover:bg-red-600 hover:text-white rounded-xl  p-1 hover:ring-orange-400 hover:ring-1"
            >
                <Delete/>
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title" className="px-10 pt-10">
                    {`আপনি কি নিশ্চিত ${title}  মুছে ফেলতে চান?`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <CircularProgress/>
                            </div>
                        ) : (
                            <div className="flex justify-center gap-3 items-center pb-6 pt-3">
                                <button
                                    onClick={handleDelete}
                                    className="px-4 py-2 w-[60px] text-xs rounded-md bg-red-500 text-white"
                                >
                                    হ্যাঁ
                                </button>
                                <button
                                    onClick={handleClose}
                                    className="px-4 py-2 w-[60px] text-xs rounded-md bg-primaryColor text-white"
                                >
                                    না
                                </button>
                            </div>
                        )}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}