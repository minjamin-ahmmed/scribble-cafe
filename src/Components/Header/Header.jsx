import profileImg from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="flex justify-between items-center pb-4 border-b-2 border-gray-300 mb-5">
            <h1 className="text-4xl font-extrabold">Knowledge Cafe</h1>
            <div >
                <img className="rounded-full w-[50px] h-[50px] object-cover " src={profileImg} alt="" />
            </div>
        </div>
    );
};

export default Header;