import {Icon, SearchBar, WingBlank} from 'antd-mobile';
// require('./search.css');
import styles from './search.css'

export default class Hello extends React.Component {
  state = {
    value: '搜索',
    isSearch: false,
  };
  onChange = (value) => {
    this.setState({value})
  };
  search = (v) => {
    console.log(v);
    // this.setState({isSearch:true});
  };

  render() {
    return (
      <div>
        <WingBlank>
          <div className={styles.logo}>Search for You</div>
        </WingBlank>
        <SearchBar
          value={this.state.value}
          placeholder="搜索"
          onSubmit={this.search('submit')}
          // onClear={value => console.log(value, 'onClear')}
          // onFocus={() => console.log('onFocus')}
          onBlur={this.search('blur')}
          // onCancel={() => console.log('onCancel')}
          showCancelButton={false}
          onChange={this.onChange}/>

        <WingBlank/>

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
