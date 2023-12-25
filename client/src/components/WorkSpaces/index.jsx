import { Link } from "react-router-dom"
import "./workSpaces.scss"
import { WorkList } from "@/components"
export const WorkSpaces = () => {
    return (
        <div className="workSpaces">
            <header className="header">
                <div className="left">
                    <div className="title">
                        <h1>Legit Hukuk Bürosu</h1>
                        <div className="hr" />
                    </div>
                    <h2>Çalışma Alanlarımız</h2>
                </div>
                <div className="center">
                    <p>
                        Legit Hukuk Bürosu & Danışmanlık, avukatlık ve hukuki danışmanlık hizmeti sunmakta olup, müvekkillerinin ihtiyaç duyduğu hukuki desteğin nitelikli şekilde temini için ülkemizdeki ve dünyadaki hukuki ve ekonomik gelişmeleri yakından takip ederek çalışmalarını sürdürmektedir.
                    </p>
                    <p>
                        Legit Hukuk Bürosu & Danışmanlık, başta Ticaret Hukuku, Borçlar Hukuku, Sözleşmeler Hukuku, Vergi Hukuku, İdare Hukuku, İş ve Sosyal Güvenlik Hukuku alanları olmak üzere, Gayrimenkul Hukuku, Miras Hukuku, Bilişim Hukuku, Spor Hukuku, Sağlık Hukuku ve Rekabet Hukuku gibi birçok alanda, avukatlık ve hukuki danışmanlık faaliyetleri yürütmektedir
                    </p>
                    <p>
                        Müvekkillerimizin talepleri doğrultusunda, ekibimizde yer alan avukatlarımız ile hizmet verdiğimiz çalışma alanlarımız;
                    </p>
                </div>
                <Link to="/hizmetlerimiz" className="right">
                    Çalışma Alanları
                </Link>
            </header>
            <WorkList />
        </div>
    )
}
