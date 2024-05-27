import DateTimePretty from './DateTimePretty';
import DateTime from './DateTime';

const DateTimeComponent = DateTimePretty(DateTime)

export default function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimeComponent date={props.date} />
        </div>
    )
}