import styles from './services.module.css';
export const Services = () => {
  return (
    <div className="Services text-white">

      <div class="header gap-3 p-2">
        <img src="/layout/logo2.png" class="" alt="logo" />
        <p class={styles.p}> We plan to start 2024 by boosting all our clients sales by 20-50% every month with our new BOLT ON Solutions, Expanding and upgrading our existing leads pipelines whilst We plan on entering new markets.</p>
      </div>

      <div class="sec1 gap-2">
        <h2>Huge Updates On-The-Way:</h2>
        <ul class="mt-2">
          <li>Expanding in existing markets: Canada, UK, and US and promoting our upgraded leads services there</li>
          <li>Entering new targeted markets: China</li>
        </ul>
      </div>

      <div class="m-5 sec2 d-flex">
        <div class="c1 mr-2">
          <ul>
            <li>Main</li>
            <li>Services</li>
            <li>Request Rate</li>
            <li>Leads Orders Diagram</li>
          </ul>
        </div>

        <div class="c2 d-flex flex-wrap">
          <div class="l1 d-flex">
            <img src="/layout/l1.png" width="100px" height="100px" alt="l1" />
            <p class={styles.p}>Real Estate & Home Reno Leads Generation Services (US, UK, Egypt)</p>
          </div>
          <div class="l2 d-flex ">
            <img src="/layout/l2.png" width="100px" height="100px" alt="l2" />
            <p class={styles.p}> HVAC & Home Appliances Customized Lead Generation Services (US, UK, Canada)</p>
          </div>
          <div class="l3 d-flex">
            <img src="/layout/l3.png" width="100px" height="100px" alt="l3" />
            <p class={styles.p}>inbound, Customer Service & Virtual Assistance Services (World Wide)</p>
          </div>
          <div class="l4 d-flex ">
            <img src="/layout/l4.png" width="100px" height="100px" alt="l4" />
            <p class={styles.p}> Solar Lead Generation Services
              (US, Canada)</p>
          </div>
        </div>
      </div>
    </div>

  );
}