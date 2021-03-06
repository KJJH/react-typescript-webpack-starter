import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import CooniBtn from '@shared/CooniBtn';
import {
  google_logo_1x, google_logo_2x, google_logo_3x,
  facebook_logo_1x, facebook_logo_2x, facebook_logo_3x,
} from '@utils/Icons';

import classNames from 'classnames/bind';
const styles = require('./Intro.css');
const cx = classNames.bind(styles);

@inject('store')
@observer
class Intro extends Component<any> {
  public login(oauth: string) {
    this.props.store.user.login(`user from ${oauth}`);
  }

  public goToSignUp() {
    this.props.history.push('/signup');
  }

  public render() {
    const { getString } = this.props.store.locale;
    const containerClass = cx({
      container: true,
      background: true,
    });
    return(
      <div>
        {
          this.props.store.user.loggedIn
          ? <Redirect to='/tab/tab1' />
          : <div className={containerClass}>
              <div className={styles.oauthBox}>
                  <CooniBtn
                    onClick={() => this.goToSignUp()}
                    white={true}
                    btnTxt={getString('SIGNUP')}
                  />
                  <CooniBtn
                    onClick={() => this.login('google')}
                    white={true}
                    btnTxt={getString('GOOGLE_LOGIN')}
                    imgSrc={google_logo_1x}
                    srcset={`${google_logo_2x} 2x, ${google_logo_3x} 3x`}
                  />
                  <CooniBtn
                    onClick={() => this.login('facebook')}
                    white={true}
                    btnTxt={getString('FACEBOOK_LOGIN')}
                    imgSrc={facebook_logo_2x}
                    srcset={`${facebook_logo_2x} 2x, ${facebook_logo_3x} 3x`}
                  />
              </div>
            </div>
        }
      </div>
    );
  }
}

export default Intro;
