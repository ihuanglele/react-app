import {Icon, SearchBar, WingBlank} from 'antd-mobile';
// require('./search.css');
import styles from './search.css'

export default class Hello extends React.Component {
  state = {
    value: '搜索',
    isSearch: false,
    time: 1,
  };
  onChange = (value) => {
    // console.log(value);
    this.setState({value})
  };
  search = (v) => {
    console.log(v);
    let time = this.state.time;
    time++;
    setTimeout(() => {
      this.setState({isSearch: false, time})
    }, 3000);
  };

  render() {
    return (
      <div>
        {
          this.state.isSearch ? (<WingBlank>
            <div className={styles.logo}>Search for You</div>
          </WingBlank>) : ''
        }
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={() => this.search('submit')}
          onClear={value => this.setState({value: ''})}
          onFocus={() => this.setState({isSearch: false})}
          onBlur={() => this.setState({isSearch: true})}
          showCancelButton={false}
          onChange={this.onChange}
        />

        <WingBlank/>

        <p>{this.state.time}</p>

        {
          this.state.isSearch ? (
            <div className={styles.searchLoading}>
              <Icon type="loading"/>
            </div>
          ) : ''
        }


      </div>
    );
  }
}
