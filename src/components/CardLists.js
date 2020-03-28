import React, {Component} from 'react';

class CardLists extends Component {



    render() {
        return (
            <div>
                <div className="social-card">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-card-item">
                                <div className="card-header">
                                    <img src="https://picsum.photos/50/50" alt="logo" className="card-logo"/>
                                    <div className="card-info">
                                        <h2 className="author-title">The Practical Dev <span>&copy; ThePracticalDev. Sep 10</span>
                                        </h2>
                                        <h3 className="card-title">Learning React ? Start Small.</h3>
                                        <p className="author">author : @dcedia</p>
                                    </div>
                                </div>
                                <div className="card-details">
                                    <img src="https://pbs.twimg.com/media/DJm0GJKXkAAyGiJ?format=jpg&name=small"
                                         alt="detail-img"/>
                                    <div className="details-info">
                                        <h4>Learning React?Start Small.</h4>
                                        <p>Can't pry yourself away from the tutorials?This cure is to make tiny little
                                            experimental apps.</p>
                                        <span>dev.to</span>
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <span className="comment"><i className="fa fa-comment-o"
                                                                 aria-hidden="true"></i> 2</span>
                                    <span className="re-tweet"><i className="fa fa-retweet"></i> 20</span>
                                    <span className="love"><i className="fa fa-heart" aria-hidden="true"></i> 150</span>
                                    <span className="message"><i className="fa fa-envelope"
                                                                 aria-hidden="true"></i></span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardLists;