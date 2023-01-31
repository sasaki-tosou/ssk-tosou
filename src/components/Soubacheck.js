import React from 'react'

const SoubaCheck = () => {
  return (
    <>
      <section id="souba_check">
  <div className="main-content">
    <h3 className="title04">最短10秒無料相場チェック</h3>
    <div className="smp"><img src="/images/souba_oneesan_smp.jpg" width="100%" alt="他社見積り中でもOK！" /></div>
    <div className="souba_inner">
      <div className="flex-wrap">
        <div className="souba_l">
          <h4 className="cor_l_v2 orange txt250p center">外壁塗装相場を確認</h4>
          
          <form action="https://ssgform.com/s/WSfIhYnqQZT7" method="post">

            <div style={{display: 'none'}}><input type="text" name="wana" /></div> 
            <p>
              <select name="希望内容" required="required" id="op_color">
                <option value="" selected="selected">希望内容</option>
                <option value="外壁屋根診断">外壁屋根診断</option>
                <option value="雨漏り診断">雨漏り診断</option>
                <option value="見積り依頼">見積り依頼</option>
                <option value="その他">その他</option>
              </select>
            </p>
            <p><input type="text" name="お名前" placeholder="お名前" /></p>
            <p><input type="text" name="tel" placeholder="電話番号" /></p>
            <p className="txt12">ご入力いただいたからと言って必ずご契約いただくという<br />
              ことは ございません。しつこい訪問や営業の お電話は一切いたしません。</p>
            <p className="center"><button type="submit">チェックを送信する</button></p>
          </form>
          
        </div>
        <div className="souba_r">
          <div className="tasya_ok_box">
            <p className="dark-red txt250p">他社見積り中でもOK！</p>
            <p className="txt140p">今すぐ無料！<br />
              しかも匿名で利用可能！相場内容はご納得いただけるまでご説明！</p>
          </div>
          
          <div className="step_box">
          <div className="step_title3">
            <p className="orange txt200p mtb20">たった3STEP、完全無料で<br className="pc" />
              外壁塗装の相場をご案内いたします！</p>
          </div>
            <div className="flex-wrap">
              <div className="step_l"><img src="/images/souba_txt01.png" alt="STEP1" /></div>
              <div className="step_r">
                <p>相場チェックフォームにご入力。<br />
                  お住まいの情報をフォームにご入力下さい。</p>
              </div>
            </div>
            <div className="flex-wrap">
              <div className="step_l"><img src="/images/souba_txt02.png" alt="STEP2 資格所有の塗装専門担当者が外壁塗装についてお答え。" /></div>
              <div className="step_r">
                <p>資格所有の塗装専門担当者が外壁塗装の相場についてお答え。<br />
                  ご不明点も解消いただけます。</p>
              </div>
            </div>
            <div className="flex-wrap">
              <div className="step_l"><img src="/images/souba_txt03.png" alt="STEP3 あなたにピッタリの塗装プランをご案内いたします。" /></div>
              <div className="step_r">
                <p>あなたにピッタリの塗装プランをご案内いたします。<br />
                  無料の外壁診断もご利用いただけます。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default SoubaCheck
