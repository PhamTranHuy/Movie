import Topic from "./Topic/Topic";
import { TOPICS } from "./data";

export default function Footer() {
  return (
    <div className="flex-bottom pb-32 pt-12 bg-darkBlue">
        <div className="flex items-end flex-col mr-5">
            <div className="w-[130px] mb-12">
                <img alt='' src={process.env.PUBLIC_URL + '/footer/logo.svg'} />
            </div>
            <button className="px-5 py-2 text-lightBlue bg-white font-bold text-xl rounded-md">JOIN THE COMMUNITY</button>
        </div>
        <div className="flex-top">
                {TOPICS.map((topic, index) => (
                    <div key={index} className="">
                        <Topic title={topic.title} detail={topic.detail}/>
                    </div>
                ))}
        </div>
    </div>
  );
}
