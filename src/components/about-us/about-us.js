import styles from './about-us.module.css';
export const AboutUs = () => {
  return (
    <div className="AboutUs text-white">
      <div class="header m-2">
        <h2>About Us</h2>
        <p class={styles.p}>LeadX Bull stays current with the market trends aiming not only to thrive but also to enhance in such a rapidly evolving digital age, and to keep up its telemarketing services with the client’s expectations worldwide.</p>
      </div>

      <div class="history m-2">
        <h2>History</h2>
        <p class={styles.p}>As the leading company in the telemarketing industry with a passion for innovation and excellence, LeadX Bull has become a household name in the tele sales world, known for its groundbreaking lead generation and digital sales services.</p>
        <button class="btn btn-primary">Read more</button>
      </div>

      <div class="profile d-flex m-2">
        <div>
          <h2>Profile</h2>
          <p class={styles.p}>
            LeadX Bull Global Online leads and sales orders account for over 65% of the total announced digital sales volume in Canada, Directly and in affiliation and partnership contracts. Total $4 Million Gross Sales Revenue Globally - 2023
          </p>
          <div class="table">
            <div class="l1 d-flex">
              <h4>Mission:</h4>
              <p> Our mission is to be the leading innovator in the telemarketing industry through our cloud based Lead-Gen solutions</p>
            </div>
            <div class="l2 d-flex">
              <h4 >Vision:</h4>
              <p>We enhance our data centers to personalize the contractor clients experience through telemarketing</p>
            </div>
            <div class="l3 d-flex">
              <h4 >Values:</h4>
              <p>Our core values include elimination of privacy concerns, and adherence to global marketing regulations</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/layout/i.png" alt="i" width="400px" hight="400px" />
        </div>

      </div>
    </div>
  );
}