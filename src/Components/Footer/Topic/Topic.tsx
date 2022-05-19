import PropTypes, { InferProps } from 'prop-types';

const topicType = {
    topic: {
        title: PropTypes.string,
        detail: [{
            text: PropTypes.string,
            url: PropTypes.string
        }]
    }
}

export default function Topic ({ topic }: InferProps<typeof topicType>) {
  return (
    <div>
      {topic?.title}
    </div>
  );
}
