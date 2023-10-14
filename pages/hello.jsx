import Link from "next/link";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const NewPassword = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="bg-white text-black py-4 px-14 flex items-center justify-between ">
        {/* <Image src="/logo.png" alt="Normar Logo" width={120} height={40} /> */}
        <div className="flex items-center space-x-5 md:hidden">
          <Link
            className={
              "bg-primary text-white font-semibold py-2.5 px-4 rounded-md"
            }
            href={"/signin"}
          >
            Log In
          </Link>
        </div>
      </div>

      <form className={"flex flex-col items-center justify-center space-y-4"}>
        <div className="flex flex-col justify-center md:justify-start w-96 ">
          <h1 className={"my-3 text-primary text-3xl font-bold"}>
            Create New Password
          </h1>
          <p>
            Kindly create a new password that is different from your previously
            used passwords.
          </p>
        </div>
        <div className={"flex flex-col"}>
          <label className={"font-medium text-primary my-1"}>
            New Password
          </label>

          <input
            className={
              "outline-none focus:outline-primary bg-lblue py-2 px-2 w-96 rounded-md"
            }
            placeholder={"***************"}
            type="password"
            name="password"
          />
        </div>
        <div className={"flex flex-col"}>
          <label className={"font-medium text-primary my-1"}>
            Confirm Password
          </label>

          <input
            className={
              "outline-none focus:outline-primary bg-lblue py-2 px-2 w-96 rounded-md"
            }
            placeholder={"***************"}
            type="password"
            name="password"
          />
        </div>
        <button
          onClick={handleOpen}
          className={
            "bg-primary text-white font-semibold py-2.5 px-4 hover:bg-black w-96 rounded-md"
          }
          type="submit"
        >
          Reset Password
        </button>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>Hello</div>
      </Modal>
    </>
  );
};

export default NewPassword;
