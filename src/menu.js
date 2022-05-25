import logo from './assets/images/brand.svg';

function menu() {
  return (
    <nav id="scrollspy" class="navbar navbar-light bg-light navbar-expand-lg fixed-top" data-spy="affix" data-offset-top="20">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="home" class="brand-img" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">หน้าแรก</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">เกี่ยวกับ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">ภายในกลุ่ม</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#listadmin">แอดมิน</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">ติดต่อ</a>
            </li>
            <li class="nav-item ml-0 ml-lg-4">
              <a class="nav-link btn btn-danger" href="https://discord.gg/VFmds2G">เข้าร่วมกลุ่ม</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default menu;