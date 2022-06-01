import PropTypes, { InferProps } from 'prop-types';

const topicType = {
    title: PropTypes.string,
    detail: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string
    }))
}

type TopicProps = InferProps<typeof topicType>

export default function Topic ({ title, detail }: TopicProps) {
  return (
    <div className="mx-5">
        <h3 className="font-bold text-xl">{title}</h3>
        {detail?.map((item, index) => (
            <div key={index} className="text-lg">
                <button>{item?.text}</button>
            </div>
        ))}
    </div>
  );
}
