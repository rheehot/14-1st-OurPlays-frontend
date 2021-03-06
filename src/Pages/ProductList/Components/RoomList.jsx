/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import RoomListGrade from "./RoomListGrade";
import Bookmark from "./Bookmark";
import "../ProductList.scss";

class RoomList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  goToDetail = (place_id) => {
    this.props.history.push(`/place/detail/${place_id}`);
  };

  render() {
    const { PLACEINFO } = this.props;
    return (
      <>
        {PLACEINFO.length > 0 &&
          PLACEINFO.map((placeinfo) => {
            return (
              <div className="room-list">
                <div className="room-list-link">
                  <div className="RoomListImages">
                    <div className="room-list-imgs">
                      <img
                        onClick={() => this.goToDetail(placeinfo.place_id)}
                        className="room-list-img"
                        src={placeinfo.img_url}
                      />
                      <Bookmark />
                    </div>
                  </div>
                  <div
                    className="room-list-text"
                    onClick={() => this.goToDetail(placeinfo.place_id)}
                  >
                    <div
                      className="room-list-region"
                      onClick={() => this.goToDetail(placeinfo.place_id)}
                    >
                      {placeinfo.category}/{placeinfo.region}
                    </div>
                    <div
                      className="room-list-title"
                      onClick={() => this.goToDetail(placeinfo.place_id)}
                    >
                      {placeinfo.title}
                    </div>
                    <div className="room-list-price">
                      <span className="big-text">{placeinfo.price}</span>
                      <span className="small-text">원/시간</span>
                    </div>
                    <div className="room-list-grade">
                      <RoomListGrade />
                      <div className="review-number">
                        <span>77</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    );
  }
}

export default withRouter(RoomList);
