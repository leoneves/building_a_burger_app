import { Component } from 'react';
import { connect } from 'react-redux';
import RootState from '../../redux/RootState';
import UserState from '../../redux/user/UserState';

class Home extends Component<HomeProps> {
  render() {
    return (
      <div>
        <p>Home</p>
        <p>Well come: {this.props.username}</p>
      </div>
    );
  }
}

type HomeProps = UserState;

const mapStateToProps = ({ user }: RootState) => ({
  username: user.username,
  authToken: user.authToken,
});

export default connect(mapStateToProps, null)(Home);
