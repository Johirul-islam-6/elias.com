import { Card } from "@/Components/Project/Card";


 const Project = () => {
  return (
    <div>

      <div className=" max-w-screen-xl mx-auto padding-x-40 ">
        <h1 className="text-[36px] font-[600] text-center text-[#fff] pb-20 pt-[100px]">
          My Project
        </h1>

        <div className="flex justify-center flex-wrap items-center gap-y-16  gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        
      </div>



    </div>
  )
}


export default Project;
