import Topic from "./Topic/Topic";

export default function Footer () {
  return (
    <div className="flex-center pb-60 bg-darkBlue">
      <div className="flex items-end flex-col">
          <div className="w-[130px] mb-12">
            <img alt='' src={process.env.PUBLIC_URL + '/footer/logo.svg'} />
          </div>
          <button className="px-5 py-2 text-lightBlue bg-white font-bold text-xl rounded-md">JOIN THE COMMUNITY</button>
      </div>
      <div className="flex-center">
        <Topic title={'title'} detail={{text: 'aaa', url: 'aaaa'}}/>
      </div>
    </div>
  );
}
