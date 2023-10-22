import Topics from "./Topics";

const Post = () => {
  const renderPost = 
    Array.from({length: 5}).map((_,i) => (
      <div key={i} className="flex flex-col space-y-3">
        <div className="flex space-x-5">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div>
            <p className="text-sm font-bold">Author name ・ Post date</p>
            <p className="text-sm">Author biography</p>
          </div>
        </div>
        <div className="grid h-36 grid-cols-12 w-full">
          <div className="col-span-8">
            <p className="text-2xl font-bold mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ad qui delectus officia, temporibus in. Quis officia voluptatum cumque, quisquam accusantium quasi id ducimus dignissimos rerum tempora, est, esse magnam?</p>
          </div>
          <div className="col-span-4">
            <div className="bg-slate-300 w-full h-full rounded"></div>
          </div>
        </div>

        <div className="border-b border-gray-300 pb-5">
         <Topics style="justify-start"/>
        </div>
      </div>
    ))
  return renderPost
}

export default Post;