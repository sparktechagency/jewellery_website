import { ConfigProvider, Input, Modal } from "antd";
import { AiOutlineSearch } from "react-icons/ai";

const GlobalSearchModal = ({ isModalOpen, handleOk, handleCancel }) => {
    return (
        <ConfigProvider
            theme={{
                "components": {
                    "Modal": {
                        "contentBg": "rgba(255,255,255,0.90)"
                    }
                }
            }}
        >
            <Modal
                className=""
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closeIcon={false}
                footer={false}
                width={600}
            >
                <ConfigProvider
                    theme={{
                        components: {
                            "Input": {
                                "activeBorderColor": "rgb(0,0,0)",
                                "hoverBorderColor": "rgb(8,8,8)",
                                "colorPrimaryHover": "rgb(0,0,0)",
                                "colorPrimaryActive": "rgb(0,0,0)",
                                "controlHeight": 44,
                                "borderRadius": 3,
                                "primaryColor": "rgb(0,0,0)",
                            }
                        },
                    }}
                >
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div
                            className={`"}`}
                        >
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-[#5c5c5c] to-[#080808] bg-clip-text text-transparent mb-2">
                                Discover Your Perfect Piece
                            </h2>
                            <p className="text-gray-800 text-sm">Search through our curated collection of fine jewelry</p>
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <div className="  w-[400px]">
                            <Input prefix={<AiOutlineSearch size={30} />} className=" w-[400px]" placeholder="Search Product" />
                        </div>
                    </div>
                    <div className="h-[100px] ">

                    </div>

                </ConfigProvider>

            </Modal>
        </ConfigProvider >

    );
};

export default GlobalSearchModal;