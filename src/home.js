import logotest from './assets/images/404.webp';

function home() {
  return (
    <header id="home" class="header">
      <div class="overlay"></div>
      <div id="header-carousel" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="container">
          <div class="carousel-inner " data-aos="fade-in" data-aos-delay="500">
            <div class="carousel-item active">
              <div class="carousel-caption d-none d-md-block">
                <h1 class="carousel-title">💮ชมรมคนเหงา💘<br />
                  <div class="col-sm-6 d-flex align-items-center aos-init aos-animate" data-aos="fade-right">
                    <div>
                      <hr width="200" style="height: 2px;" />
                      <p class="text-danger" style="max-width: 500px;">ยังคิดคำสโลแกนไม่ออก</p>
                      <button class="btn btn-danger btn-rounded" onclick="window.location.href='https://discord.gg/VFmds2G'">เข้าร่วมกลุ่ม</button>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
            <div class="carousel-item">
              <div class="carousel-caption d-none d-md-block">
                <h1 class="carousel-title">💮ชมรมคนเหงา💘<br />
                  <div class="col-sm-6 d-flex align-items-center aos-init aos-animate" data-aos="fade-right">
                    <div>
                      <hr width="200" style="height: 2px;" />
                      <p class="text-danger" style="max-width: 500px;">ยังคิดคำสโลแกนไม่ออก</p>
                      <button class="btn btn-danger btn-rounded" onclick="window.location.href='https://discord.gg/VFmds2G'">เข้าร่วมกลุ่ม</button>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="infos container mb-4 mb-md-2">
        <div class="title">
          <h6 class="subtitle font-weight-normal">Discord</h6>
          <h5>ชมรมของคนเหงา</h5>
          <p class="font-small">ยังคิดบทนำไม่ออกจะใส่อะไรดีน๊าา ใครคิดออกบอกด้วยนะ.</p>
        </div>

        <div class="socials text-right">
          <div class="row justify-content-between">
            <div class="col">
              <h6 class="subtitle font-weight-normal mb-2">โซเซียล มีเดีย</h6>
              <div class="social-links">
                <a href="javascript:void(0)" class="link pr-1"><i class="fa-brands fa-facebook"></i></a>
                <a href="javascript:void(0)" class="link pr-1"><i class="fa-brands fa-twitter"></i></a>
                <a href="javascript:void(0)" class="link pr-1"><i class="fa-brands fa-google-plus"></i></a>
                <a href="javascript:void(0)" class="link pr-1"><i class="fa-brands fa-pinterest"></i></a>
                <a href="javascript:void(0)" class="link pr-1"><i class="fa-brands fa-instagram"></i></a>
                <a href="javascript:void(0)" class="link pr-1"><i class="fa fa-rss"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default home;
