// components/waveform.js
import { withStyles } from '@mui/styles';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import WaveSurfer from 'wavesurfer';

const styles = () => ({
    container: {
        width: '100%',
        '& .loading': {
            visibility: 'hidden',
        },
    },
});
class Waveform extends React.Component {
    constructor(props) {
        super(props);

        this.waveformRef = React.createRef();
        this.play = this.play.bind(this);
        this.resetPlayhead = this.resetPlayhead.bind(this);

        this.state = {
            wavesurfer: null,
            loading: true,
            // eslint-disable-next-line react/no-unused-state
            isPlaying: false,
        };
    }

    componentDidMount() {
        const wavesurfer = WaveSurfer.create({
            container: this.waveformRef.current,
            barWidth: 3,
            cursorWidth: 1,
            backend: 'WebAudio',
            height: 80,
            progressColor: this.props.theme.palette.primaryColor,
            responsive: true,
            waveColor: this.props.theme.palette.white,
            cursorColor: 'transparent',
        });
        this.setState({ wavesurfer });
        wavesurfer.load(this.props.src);
        wavesurfer.on('loading', (waveLoading) => {
            if (waveLoading === 100) {
                this.setState({ loading: false });
            }
        });
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.isPlaying !== this.props.isPlaying) {
            this.play();
        }
        if (newProps.isAtBeginning === true && newProps.isAtBeginning !== this.props.isAtBeginning) {
            this.resetPlayhead();
        }
    }

    play() {
        this.state.wavesurfer.playPause();
    }

    resetPlayhead() {
        this.state.wavesurfer.seekTo(0);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={`${ classes.container } ${ this.state.loading && 'loading' }`} ref={this.waveformRef}  />
                {this.state.loading && (
                    <Skeleton
                        baseColor={this.props.theme.palette.skeletonColors.baseColor}
                        highlightColor={this.props.theme.palette.skeletonColors.highlightColor}
                        height={70}
                        width="100%"
                    />
                )}

            </div>
        );
    }
}

Waveform.defaultProps = {
    src: '',
};
export default withStyles(styles, { withTheme: true })(Waveform);
