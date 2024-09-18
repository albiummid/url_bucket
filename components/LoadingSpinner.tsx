import Image from "next/image";

export default function LoadingSpinner({ isOpen, children }) {
    return (
        <div>
            <div className={` ${isOpen ? "h-screen w-screen blur-sm" : ""}`}>
                {children}
            </div>
            {isOpen && (
                <Image
                    className="rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
                    height={200}
                    width={200}
                    src={require("@/assets/animation/gif/loading.gif")}
                    alt=""
                />
            )}
        </div>
    );
}
