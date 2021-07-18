import React from 'react';
import VideoListItem from './video_list_item';

// class방식으로 리팩토링 시 props -> this.props로 변경해야 한다.
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        )
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;