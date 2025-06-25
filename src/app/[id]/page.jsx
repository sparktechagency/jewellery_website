import Image from "next/image";
import SubCategories from "../../components/shared/SubCategories";
import mainUrl from "../../components/shared/mainUrl";

const page = async ({ params }) => {
  const { id } = await params;
  const category = await mainUrl(`/categories/${id}`);
  return (
    <div className="container mx-auto mt-9 px-4 lg:px-0">
      <div>
        <h1 className="pb-4">Home/{category?.name}</h1>
        <div
          className="relative bg-cover bg-center md:h-[55vh] h-[200px] -mt-[1px]"
          style={{
            width: "100%",
          }}
        >
          <Image
            src={category?.img_url}
            className="rounded-2xl"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute px-4 lg:px-0 inset-0 flex items-center ">
            <div className="">
              <div className="md:pl-20">
                <div className="text-3xl font-semibold md:text-5xl ">
                  <h1 className="">{category?.name}</h1>
                </div>
                <p className="md:py-5 py-2 text-sm  text-black max-w-2xl">
                  {category?.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubCategories categorys={category} categoryId={id} />
    </div>
  );
};

export default page;
