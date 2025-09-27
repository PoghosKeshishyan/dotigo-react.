import '../stylesheets/vps.css';

export default function VPSPage() {
    return (
        <div className='VpsPage wrapper'>
            <div className="heading">
                <h1>VPS servers for rent</h1>
                <p>Next generation VPS virtual servers for problem solving, development and training</p>
            </div>

            <div className="tariff-plans">
                <div className="container">
                    <h2>Tariff plans</h2>

                    <div className="left">
                        <div className="images">
                            <h3>Images</h3>

                            <div className="tabs">
                                <button className="tab active">Operating systems</button>
                                <button className="tab">Applications and Control Panels</button>
                                <button className="tab">GPU</button>
                            </div>

                            <div className="images-list">
                                <div className="image-card">
                                    <img src="/b/alma.png" alt="AlmaLinux" />
                                    <div className="content">
                                        <h4>AlmaLinux</h4>
                                        <p>AlmaLinux 9</p>
                                    </div>
                                </div>
                                <div className="image-card active">
                                    <img src="/b/alma.png" alt="AlmaLinux" />
                                    <div className="content">
                                        <h4>AlmaLinux</h4>
                                        <p>AlmaLinux 9</p>
                                    </div>
                                </div>
                                <div className="image-card">
                                    <img src="/b/alma.png" alt="AlmaLinux" />
                                    <div className="content">
                                        <h4>AlmaLinux</h4>
                                        <p>AlmaLinux 9</p>
                                    </div>
                                </div>
                                <div className="image-card">
                                    <img src="/b/alma.png" alt="AlmaLinux" />
                                    <div className="content">
                                        <h4>AlmaLinux</h4>
                                        <p>AlmaLinux 9</p>
                                    </div>
                                </div>
                                <div className="image-card">
                                    <img src="/b/alma.png" alt="AlmaLinux" />
                                    <div className="content">
                                        <h4>AlmaLinux</h4>
                                        <p>AlmaLinux 9</p>
                                    </div>
                                </div>
                                <div className="image-card">
                                    <img src="/b/alma.png" alt="AlmaLinux" />
                                    <div className="content">
                                        <h4>AlmaLinux</h4>
                                        <p>AlmaLinux 9</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tariffs">
                            <h3>Tariffs and configurations</h3>
                            <p>vCPU and disk type</p>

                            <div className="cpu-types">
                                <div className="cpu-card">
                                    <h4>Standard</h4>
                                    <p>2,2 ГГц + SSD</p>
                                </div>
                                <div className="cpu-card active">
                                    <h4>Productive</h4>
                                    <p>2,8 ГГц + NVMe</p>
                                    <span className="note">up to 25% more powerful</span>
                                </div>
                                <div className="cpu-card">
                                    <h4>Dedicated CPU</h4>
                                    <p>2,8 ГГц + NVMe</p>
                                    <span className="note">100% vCPU share</span>
                                </div>
                                <div className="cpu-card">
                                    <h4>High frequency</h4>
                                    <p>3,2 / 3,7+ ГГц + NVMe</p>
                                    <span className="note">up to 40% more powerful</span>
                                </div>
                            </div>

                            <p>Tariff</p>

                            <div className="tariff-list">
                                <div className="tariff-card active">
                                    <h4>HP C1-M1-D10</h4>
                                    <p className="price">$48/month <span>$0,71/hour</span></p>
                                    <ul>
                                        <li>1 core <span>vCPU</span></li>
                                        <li>1 GB <span>RAM</span></li>
                                        <li>10 GB <span>NVMe</span></li>
                                    </ul>
                                </div>
                                <div className="tariff-card">
                                    <h4>HP C1-M1-D10</h4>
                                    <p className="price">$48/month <span>$0,71/hour</span></p>
                                    <ul>
                                        <li>1 core <span>vCPU</span></li>
                                        <li>1 GB <span>RAM</span></li>
                                        <li>10 GB <span>NVMe</span></li>
                                    </ul>
                                </div>
                                <div className="tariff-card">
                                    <h4>HP C1-M1-D10</h4>
                                    <p className="price">$48/month <span>$0,71/hour</span></p>
                                    <ul>
                                        <li>1 core <span>vCPU</span></li>
                                        <li>1 GB <span>RAM</span></li>
                                        <li>10 GB <span>NVMe</span></li>
                                    </ul>
                                </div>
                                <div className="tariff-card">
                                    <h4>HP C1-M1-D10</h4>
                                    <p className="price">$48/month <span>$0,71/hour</span></p>
                                    <ul>
                                        <li>1 core <span>vCPU</span></li>
                                        <li>1 GB <span>RAM</span></li>
                                        <li>10 GB <span>NVMe</span></li>
                                    </ul>
                                </div>
                                <div className="tariff-card">
                                    <h4>HP C1-M1-D10</h4>
                                    <p className="price">$48/month <span>$0,71/hour</span></p>
                                    <ul>
                                        <li>1 core <span>vCPU</span></li>
                                        <li>1 GB <span>RAM</span></li>
                                        <li>10 GB <span>NVMe</span></li>
                                    </ul>
                                </div>
                                <div className="tariff-card">
                                    <h4>HP C1-M1-D10</h4>
                                    <p className="price">$48/month <span>$0,71/hour</span></p>
                                    <ul>
                                        <li>1 core <span>vCPU</span></li>
                                        <li>1 GB <span>RAM</span></li>
                                        <li>10 GB <span>NVMe</span></li>
                                    </ul>
                                </div>
                                <div className="tariff-card">
                                    <h4>HP C1-M1-D10</h4>
                                    <p className="price">$48/month <span>$0,71/hour</span></p>
                                    <ul>
                                        <li>1 core <span>vCPU</span></li>
                                        <li>1 GB <span>RAM</span></li>
                                        <li>10 GB <span>NVMe</span></li>
                                    </ul>
                                </div>
                                <div className="tariff-card">
                                    <h4>HP C1-M1-D10</h4>
                                    <p className="price">$48/month <span>$0,71/hour</span></p>
                                    <ul>
                                        <li>1 core <span>vCPU</span></li>
                                        <li>1 GB <span>RAM</span></li>
                                        <li>10 GB <span>NVMe</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="configuration">
                    <h3>Configuration</h3>

                    <div className="config-container">
                        <div className="system">
                            <span>Operating system</span>
                            <p>AlmaLinux 9</p>
                        </div>

                        <div className="payment">
                            <div className="title">
                                <p>Monthly payment</p>

                                <div className="choose-paying-way flex-center">
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                        />

                                        <span className="slider"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="tariff-card">
                                <span>Tariff</span>
                                <h4>HP C1-M1-D10</h4>
                                <ul>
                                    <li>1 core <span>vCPU</span></li>
                                    <li>1 GB <span>RAM</span></li>
                                    <li>10 GB <span>NVMe</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="network">
                            <span>Network settings</span>
                            <p>Floating IP address × 1</p>
                        </div>

                        <div className="total flex-between">
                            <p>Total</p>
                            <p className="price">$48/hour</p>
                        </div>
                    </div>

                    <button className="btn">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
