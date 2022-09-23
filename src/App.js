import './App.css';
import airbnb_icon from './icon/airbnb.svg';
import dropbox_icon from './icon/dropbox.svg';
import microsoft_icon from './icon/microsoft.svg';
import header_img from './icon/5700262.jpg';
import starIcon from './icon/star.svg';
import webIcon from './icon/globe.svg';
import webdevicon from './icon/image.svg';
import charticon from './icon/graph-up-arrow.svg';
import createuser from './icon/person-circle.svg';
import fileIcon from './icon/file-earmark-bar-graph-fill.svg';
import searchIcon from './icon/search.svg';
import checkIcon from './icon/check-circle-fill.svg';
import facebook_icon from './icon/icons8-facebook-f.svg';
import instagram_icon from './icon/icons8-instagram.svg';
import twitter_icon from './icon/icons8-twitter.svg';
import linkedin_icon from './icon/icons8-linkedin-2.svg';
const placeholder = 'SEARCH OUR SERVICES';
const main_placeholder = 'Enter your email';
function App() {
  return (
    <div className="App">

<header className='App_header'>
<nav className='app-nav'>
  <div className='logo_container'>
    <h4 className='logo_text'>Digi.Buisness</h4>
  </div>
    <ul className='nav_ul'>
    <li className='nav-listItem'>Home</li>
    <li className='nav-listItem'>About</li>
    <li className='nav-listItem'>Testimonial</li>
    <li className='nav-listItem'>Contact</li>
    </ul>
    <ul className='nav_ul'>
      <li className='nav-listItem'>Login</li>
      <li className='nav-listItem'><button className='btn nav_btn'>Sign up</button></li>
    </ul>
</nav>
<div  className="header_content">
<div className='header_text'>
  <h1 className='header_h1'>Growing your
    <br/><span> Buisness</span></h1>
  <p>Relation in confined children unpacked delicate. Why sir end believe uncivil respect.
     Always get audieus nature day course for common my little garret repair to desire he esteem</p>
<form>
<input className='search_input' placeholder={placeholder}/>
<button className='btn search_btn'>SEARCH</button>
</form>
<div className='header_btn_container'>
  <div className='btn-container'>
  <button className='btn servies_btn'><img src={airbnb_icon}alt="airbnb icon"/>airbnb</button>
  </div>
  <div className='btn-container'>
  <button className='btn servies_btn'><img src={dropbox_icon}alt="dropbox icon"/>Dropbox</button>
</div>
<div className='btn-container'>
<button className='btn servies_btn'><img src={microsoft_icon}alt="microsoft icon"/>Microsoft</button>
</div>
<div className='btn-container'>
<button className='btn servies_btn'>Stripe</button>
</div>
</div>
</div>
<div className='header_img'>
  <img src={header_img} alt="header_img" className='header-image'/>
</div>
</div>
      </header>
<main className='main_content'>
<section className='card_section'>
<div className='subheader_container'>
  <h2 className='sub_header header'>Our services</h2>
  <hr/>
  <p>Offending belonging provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humored sir breeding her. Six curosity day assurance bad necessary.</p>
</div>
<div className='card_container'>
<div className='card'>
  <div className='card_img_container'><img src={starIcon} alt='star icon'/></div>
  <h3>BRANDING IDENTITY</h3>
  <p>Our support team will gey support from ai powered</p>
</div>
<div className='card'>
<div className='card_img_container'><img src={webIcon} alt='web icon'/></div>
  <h3>BRANDING CONSULT</h3>
  <p>Our support team will gey support from ai powered</p>
</div>
<div className='card'>
<div className='card_img_container'><img src={webdevicon} alt='web development icon'/></div>
  <h3>WEB DEVELOPMENT</h3>
  <p>Our support team will gey support from ai powered</p>
</div>
<div className='card'>
<div className='card_img_container'><img src={charticon} alt='chart icon'/></div>
  <h3>MARKET ANALYSIS</h3>
  <p>Our support team will gey support from ai powered</p>
</div>
</div>
</section>
</main>
      <section className='article_container'>
<div className='subheader_container article_header'>
  <h2 className='sub_header header'>How it Works ?</h2>
  <hr/>
  <div>
  <p>Offending belonging provision an be oh consulted ourselves it. Blessing welcomed ladyship she
    <br/> met humored sir breeding her. Six curosity day assurance bad necessary.</p>  
  </div>
</div>
<article className='app_article'>
  <div className='article_link_container'>
  <div className='article_link active'>
    <div className='icon_container'><img src={createuser} alt="user icon"/></div>
    <h4 className='icon_title'>Create Account</h4>
  </div>
  <div className='article_link'>
  <div className='icon_container'><div><img src={fileIcon} alt="file icon"/></div></div>
  <h4 className='icon_title'>Upload requirement</h4>
  </div>
  <div className='article_link'>
  <div className='icon_container'><img src={searchIcon} alt="search icon"/></div>
  <h4 className='icon_title'>Search Servies</h4>
  </div>
  <div className='article_link'>
  <div className='icon_container'><img src={checkIcon} alt="check icon"/></div>
  <h4 className='icon_title'>Apply</h4>
  </div>
  </div>
<div>
</div>

<div className='article_content'>
<h2>How to create an account ?</h2>
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Accusamus quidem harum corrupti! Esse consequatur mollitia accusamus aspernatur obcaecati? Labore corrupti magnam distinctio aspernatur optio laboriosam, modi enim adipisci inventore culpa assumenda? Quasi a aut praesentium, aperiam ipsum, nam quisquam tempore debitis
 fugiat illo dolor. Quidem provident odit quisquam magni labore.
  </p>

  <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Accusamus quidem harum corrupti! Esse consequatur mollitia accusamus aspernatur obcaecati? Labore corrupti magnam distinctio aspernatur optio laboriosam, modi enim adipisci inventore culpa assumenda? Quasi a aut praesentium, aperiam ipsum, nam quisquam tempore debitis
 fugiat illo dolor. Quidem provident odit quisquam magni labore.
  </p>

  <div className='btn-container'>
    <button className='btn create_btn'>CREATE ACCOUNT</button>
    <button className='btn learn_btn'>LEARN MORE</button>
  </div>
  </div>
</article>
</section>

<aside className='app_aside'>
<h2>GET YOUR UPDATE NEWS</h2>
<p>If you are going to use the passage lorem, you need to be sure there isn't embarassing</p>
<div className='aside_inputcontainer'>
<input placeholder={main_placeholder}/>
<button className='btn'>Send</button>
</div>
</aside>

<footer className='app_footer'>
  <div className='footer_list_container'>
    <div className='footer_info'>
     <h4 className='header logo_text'> Digi.Buisness</h4>
     <p>We use multi and echo cancellation to technology so that everyone can use device</p>
     <ul className='footer_icon_container'>
      <li className='footer_icon'><img src={facebook_icon} alt="facebook icon"/></li>
      <li className='footer_icon'><img src={instagram_icon} alt="instagram icon"/></li>
      <li className='footer_icon'><img src={twitter_icon} alt="facebook icon"/></li>
      <li className='footer_icon'><img src={linkedin_icon} alt="facebook icon"/></li>
     </ul>
    </div>
<div className='footer_subcontainer'>
<div className='footer_text'>
      <h4 className='header'>Resource</h4>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Login</li>
      </ul>
    </div>
    <div className='footer_text'>
      <h4 className='header'>Legal</h4>
      <ul>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Legal Notice</li>
      </ul>
    </div>
    <div className='footer_text'>
      <h4 className='header'>Links</h4>
      <ul>
        <li>Feedback</li>
        <li>Privacy policy</li>
        <li>Legal Notice</li>
      </ul>
    </div>
</div>
  </div>
  <div className='copy_write'>
<p>Copy 2022. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
}
export default App;
