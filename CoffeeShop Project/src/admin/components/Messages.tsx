import { useState,useEffect } from "react";
type Message ={
    id:number;
    name:string;
surname:string;
email:string;
phone:string;
subject:string;
message:string;
status?: string;
createdAt?: string;

}

function Messages(){
    const[messages,setMessages]=useState<Message[]>([]);
    useEffect(() => {
    fetch("http://localhost:3000/messages")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);
    return(
        <>

      <div className="ml-72 p-8 dark:bg-gray-950">
    <h1 className="text-3xl font-bold text-[#4a2c20] dark:text-white ">
      Messages
    </h1>

    <p className="mt-2 text-[#9a8477] dark:text-white">
      Manage your customer messages and inquiries.
    </p>

    <div className="mt-8 overflow-x-auto rounded-xl bg-white shadow-md">
      <table className="w-full text-left">
        <thead className="bg-[#4a2c20] text-white  dark:bg-gray-800">
          <tr className="dark:border-gray-700">
            <th className="p-4">Name</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Subject</th>
            <th className="p-4">Message</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>

        <tbody>
          {messages.length > 0 ? (
            messages.map((item) => (
              <tr key={item.id} className="border-b border-[#eee5df]">
                <td className="p-4 font-medium text-[#4a2c20] dark:text-gray-600 ">
                  {item.name} {item.surname}
                </td>

                <td className="p-4 text-[#6b574d] dark:text-gray-600 ">
                  {item.phone}
                </td>

                <td className="p-4 text-[#6b574d] dark:text-gray-600 ">
                  {item.subject}
                </td>

                <td className="max-w-xs p-4 text-[#6b574d] dark:text-gray-600">
                  {item.message}
                </td>

                <td className="p-4 dark:text-gray-600">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800">
                    {item.status ?? "unread"}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="p-8 text-center text-[#9a8477] dark:text-gray-400">
                No messages yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
        </>
    )
}
export default Messages;