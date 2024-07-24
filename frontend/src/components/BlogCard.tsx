import { Link } from "react-router-dom";

interface BlogCardInterface{
    name:string,
    title:string,
    content:string,
    publishDate:string
    autherId:number

}
export default function BlogCard({ name, title, content ,publishDate ,autherId}:BlogCardInterface) {
    // const name = useRecoilValue(userName(autherId))
  return (
    <div className="flex justify-center my-4">
        <Link to={"/api/vl/blog/"+autherId} className="block w-2/3 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700">
            <p className="font-normal text-gray-700 flex ">
                <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ">
                    <span className="font-medium text-gray-600 dark:text-gray-300 ">{ name[0] }</span>
                </div>
                <p className="pl-1">{ name  } ~{ publishDate }</p>
            </p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-2">{title}</h5>
            <p className="font-normal text-gray-700 ">{content}</p>
            <p className="mt-4 text-slate-400">{content.length / 200} minute(s) of reading..</p>
        </Link>
    </div>
  )
}
