import PropTypes, { InferProps } from 'prop-types';

const topicType = {
    title: PropTypes.string,
    detail: PropTypes.shape({
        text: PropTypes.string,
        url: PropTypes.string,
    })
}

type TopicProps = InferProps<typeof topicType>

export default function Topic ({ title, detail }: TopicProps) {
  return (
    <div>
      {title}
      {detail?.text}
    </div>
  );
}
