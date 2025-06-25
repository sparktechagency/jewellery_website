
const ProductSkeleton = () => {
    return (
        <div className="w-full">
            {/* Skeleton for Image */}
            <div className="bg-[#d3d3d3] animate-pulse md:h-[350px] h-[100px] w-full"></div>

            {/* Skeleton for Favorite Icon */}
            <div className="absolute cursor-pointer top-0 right-0 flex items-center p-1 mr-1 mt-1 rounded-full text-xl bg-[#d3d3d3] animate-pulse"></div>

            {/* Skeleton for Name */}
            <div className="pt-2">
                <div className="bg-[#d3d3d3] animate-pulse h-6 w-[70%]"></div>
            </div>

            {/* Skeleton for Price */}
            <div className="text-sm mt-1">
                <div className="bg-[#d3d3d3] animate-pulse h-6 w-[40%]"></div>
            </div>
        </div>
    );
};

export default ProductSkeleton;