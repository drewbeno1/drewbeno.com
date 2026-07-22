import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    <a href="/" class="logo">Drew Beno</a>
    <nav class="nav">
      <a href="#about" class="nav-link">About</a>
      <a href="#jobs" class="nav-link">Career</a>
      <a href="#blog" class="nav-link">Blog</a>
      <a href="#projects" class="nav-link">Projects</a>
    </nav>
  </header>

  <section id="about" class="about">
    <h2>About</h2>
    <p>
      Believer, Husband, Outdoorsman, STEM
    </p>
    <p class="verse">
      "In his hand is the life of every living thing and the breath of all mankind." — Job 12:10
    </p>
  </section>

  <section id="jobs">
    <h2>Current Roles</h2>
    <div class="card-list">
      <a href="https://wedgworth.com/" target="_blank" class="card">
        <div class="card-img" style="background-image: url('/images/IncLogo.png'); background-size: 80%; background-repeat: no-repeat"></div>
        <div class="card-content">
          <div class="card-title">Software Engineer</div>
          <div class="card-desc">Software Development, IoT, API Design</div>
        </div>
      </a>
      <a href="https://summitnutrients.com/" target="_blank" class="card">
        <div class="card-img" style="background-image: url('/images/logo-leaf.png'); background-size: 80%; background-repeat: no-repeat"></div>
        <div class="card-content">
          <div class="card-title">R&D Engineer</div>
          <div class="card-desc">R&D Team - Product Development</div>
        </div>
      </a>
    </div>
  </section>

  <section id="blog">
    <h2>Blog</h2>
    <div class="card-list">
      <a href="https://wedgworth.dev/" target="_blank" class="card">
        <div class="card-img" style="background-image: url('/images/w-dark-mode.png'); background-size: 75%; background-repeat: no-repeat"></div>
        <div class="card-content">
          <div class="card-title">wedgworth.dev</div>
          <div class="card-desc">Inside look at ag-tech projects worked on with Wedgworth's team</div>
        </div>
      </a>
    </div>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <div class="card-list">
      <a href="https://www.dbsabermetrics.com/" target="_blank" class="card">
        <div class="card-img" style="background-image: url('/images/dataBase-logo-white.png'); background-size: 80%; background-repeat: no-repeat"></div>
        <div class="card-content">
          <div class="card-title">dataBase Sabermetrics</div>
          <div class="card-desc">Real-Time Pitch Tracking and Sabermetric Software</div>
        </div>
      </a>
      <a href="http://fertmix.netlify.app/" target="_blank" class="card">
        <div class="card-img" style="background-image: url('/images/fert.png'); background-size: 80%; background-repeat: no-repeat"></div>
        <div class="card-content">
          <div class="card-title">Fertmix</div>
          <div class="card-desc">Precision Fertilizer Blend Formulation SaaS Tool</div>
        </div>
      </a>
      <a href="https://goodcareministry.com/" target="_blank" class="card">
        <div class="card-img" style="background-image: url('/images/teacher.jpg'); background-size: 120%; background-repeat: no-repeat"></div>
        <div class="card-content">
          <div class="card-title">Good Care Children's Ministry</div>
          <div class="card-desc">Website Design</div>
        </div>
      </a>
      <a href="https://clpbaseball.com/" target="_blank" class="card">
        <div class="card-img" style="background-image: url('/images/favicon.png'); background-size: 80%; background-repeat: no-repeat"></div>
        <div class="card-content">
          <div class="card-title">Collegiate League of the Palm Beaches</div>
          <div class="card-desc">Website Design</div>
        </div>
      </a>
      <a href="https://onesourceforestry.netlify.app/" target="_blank" class="card">
        <div class="card-img" style="background-image: url('/images/onesource.png'); background-size: 80%; background-repeat: no-repeat"></div>
        <div class="card-content">
          <div class="card-title">One Source Forestry</div>
          <div class="card-desc">Website Design</div>
        </div>
      </a>
    </div>
  </section>

  <footer>
    <p>Drew Beno</p>
    <p>benodrew12@gmail.com</p>
  </footer>
`
