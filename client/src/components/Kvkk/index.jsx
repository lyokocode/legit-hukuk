import "./kvkk.scss"
import { AiOutlineClose, AiOutlineWhatsApp } from "react-icons/ai";

export const Kvkk = ({ setKvkk }) => {
    return (
        <div className="kvkk">
            <button onClick={() => setKvkk(false)} className="closeBtn">
                <AiOutlineClose />
            </button>
            <h1 className="title">
                ÇEREZLERE DAİR AYDINLATMA METNİ
            </h1>
            <p>
                Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (Kanun) 10’uncu maddesi ile
                Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında
                Tebliğ kapsamında veri sorumlusu sıfatıyla Kişisel Verileri Koruma Kurumu tarafından
                (Nasuh Akar Mahallesi 1407. Sok. No:4, 06520 Çankaya/Ankara) tarafından hazırlanmıştır.
            </p>
            <p>
                Bu Çerez Aydınlatma Metni’nin amacı, internet sitemizde kullanılan çerezlerin cihazınıza
                yerleştirilmesi aracılığıyla otomatik yolla elde edilen kişisel verilerin işlenmesine ilişkin
                olarak, hangi amaçlarla hangi tür çerezleri kullandığımız, hukuki sebebi ve haklarınız
                hakkında sizlere bilgi vermektir.
            </p>
            <p>
                İnternet sitemizde yalnızca hizmetin sağlanması için kesinlikle gerekli olarak birinci taraf
                oturum ve kalıcı çerezler kullanılmaktadır.
            </p>

            <h2>Çerez Çeşitleri</h2>

            <p><b>Kullanım süresine göre çerez çeşitleri: </b> Oturum çerezi, oturumun sürekliliğinin sağlanması
                amacıyla kullanılmakta olup kullanıcı tarayıcısını kapattığında bu çerezler de silinmektedir.
                Kalıcı çerez ise internet tarayıcısı kapatıldığı zaman silinmemekte ve belirli bir tarihte veya
                belirli bir süre sonra kendiliğinden silinmektedir. Bu çerçevede, internet sitemizde kullanım
                sürelerine göre oturum ve kalıcı çerezler kullanılmaktadır.
            </p>

            <p>
                <b>Birinci taraf ve üçüncü taraf çerezler:</b> Birinci taraf çerezler, doğrudan kullanıcının ziyaret
                ettiği internet sitesi yani tarayıcının adres çubuğunda gösterilen adres tarafından
                yerleştirilmektedir. Üçüncü taraf çerezlerse, kullanıcının ziyaret ettiği adres dışında farklı bir
                etki alanı tarafından yerleştirilmektedir. Bu çerçevede, internet sitemizde yalnızca birinci taraf
                çerez kullanılmaktadır
            </p>
            <p>
                <b>Kullanım amaçlarına göre çerez çeşitleri:</b> Çerezler kullanım amaçlarına göre kesinlikle
                gerekli, işlevsel veya reklam/pazarlama gibi amaçlarla kullanılabilmektedir. Bu
                çerçevede, internet sitemizde açıkça talep etmiş olduğunuz bilgi toplum hizmetlerinin
                sunulabilmesi için kesinlikle gerekli çerezler kullanılmaktadır. Bu kapsamda,
            </p>
            <ol >
                <li>İnternet sayfasında internet sayfasına, sonradan gelen isteklerin güvenilir olup olmadığını
                    anlamak amacıyla cookiesession1 isimli birinci taraf kalıcı çerezini (bir yıl
                    saklanmaktadır),</li>
                <li>Ziyaretçilerin web sayfasını hangi dilde görüntülediği tespit edebilmek amacıyla
                    ASP.NET_SessionId isimli birinci taraf oturum çerezini,</li>
                <li>Çerez aydınlatma metninin okunduğunun teyidi amacıyla cookiepolicy_status isimli
                    birinci taraf kalıcı çerezini (bir yıl saklanmaktadır.)
                    IP bilgilerinizle ilişkilendirmek suretiyle kişisel verileriniz işlenmektedir. Söz konusu kişisel
                    verileriniz başka veri sorumlularına aktarılmamaktadır.</li>
            </ol>
            <p>
                Söz konusu çerezler yoluyla kişisel verilerin işlenmesinde 6698 sayılı Kişisel Verilerin
                Korunması Kanunu’nun 5’inci maddesinin ikinci fıkrasının (f) bendi uyarınca “İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri
                için veri işlenmesinin zorunlu olması” işleme şartına dayanılmaktadır
            </p>
            <p>
                6698 sayılı Kanun’un “ilgili kişinin haklarını düzenleyen” 11’inci maddesi kapsamındaki
                taleplerinizi, <a href="https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=24455&MevzuatTur=9&MevzuatTertip=5" target="_blank" rel="noreferrer">Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ</a>’e göre Kişisel
                Verileri Koruma Kurumuna iletebilirsiniz
            </p>
        </div>
    )
}
