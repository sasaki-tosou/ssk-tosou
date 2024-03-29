import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const kuchikomi = () => {
  return (
    <>
      <section id='kuchikomi'>
        <div className='main-content'>
          <div className='kuchikomi_title'>
            <div className='kuchikomi_title_l flex-center'>
              <span className='g_logo'>
                <StaticImage src='../images/g_logo.svg' width={100} height={32} alt='Google' />
              </span>
            </div>
            <div className='kuchikomi_title_r'>
              <h3>
                佐々木塗装の口コミ
                <br />
                総合評価:4.7
                <StaticImage src='../images/star5.png' width={160} height={25} alt='口コミ評価' className='star_icon' /> <br className='smp' />
                口コミ数:48
              </h3>
            </div>
          </div>

          <ul className='kuchikomi_box'>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2024/3/1 m ma様</span><br />
              対応がとても丁寧で、お願いして本当に良かったです。職人さんもありがとうございました。</li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2024/1/31 キラクヤショウスケ様</span>
              <br />
              屋根の塗装でお世話になりました。１５年くらい前にも外壁と屋根の塗装をお願いし、丁寧な塗装をしてもらいました。その際は付帯工事（壁面の補修など）もあり工期がかかりましたが仕上がりはとても綺麗な仕上がりでした。<br />
              今回は屋根の塗装を依頼し、年末でバタバタの時期でしたが１週間の工期で出来るとの事で始めましたが長期にわたって寒気が日本列島を襲い、雪が降り積もって塗装が出来ない状況が続きましたが工事終盤に何とか晴天が続いたので正月までに工事が終わりました。<br />
              工事の期間は従業員の方が丁寧な対応で雪模様の毎日でも訪問して頂き、こちらも恐縮しました。従業員の方々には寒い中、丁寧な仕事をして頂き、誠に有難うございました。<br />
              社長様、奥様のお人柄も良く、こちらの注文にも誠実に応えて頂き前回に引き続いてお世話になりました。誠に有難うございます。<br />
              佐々木塗装さんの仕事内容はとても良い仕事をされます。任せても安心出来ますね。<br />
              いつもながら良い仕上がりで良いお仕事をされておられますね。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/12/17 みつこ様</span>
              <br />
              外壁と、屋根の塗装をやっていただきました。
              <br />
              職人さんも丁寧な作業をしていただき満足する仕上がりになりました。
              <br />
              社長さん、奥様、女性社員の方、細かいお気遣いありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star4.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/11/12 恵美様</span>
              <br />
              対応も丁寧ですし連絡もこまめにしていただき安心して任せることができました。
              <br />
              職人さんにも丁寧な仕事をしていただき満足する仕上がりです。
              <br />
              ありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/11/3 hanako sakura様</span>
              <br />
              幸い天候に恵まれ予定通りに完了しました。挨拶、塗料の色決めなど、奥様、女性スタッフさんとの会話も楽しく親しみがあり、とても安心してできました。工事に入ってからも職人さんと顔馴染みになり、何でも相談でき納得いく工事をしていただきました。社長さん、奥さん、スタッフさん、職人さん、みなさん本当にお世話になりました。ありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/10/29 真理子様</span>
              <br />
              見積もりは丁寧で、外壁の色は何パターンもカラーシュミレーションをつくっていただきイメージしやすかったです。 社長さん社員さん職人さん、他の工事業者の方の作業もとても丁寧でした。 最終チェックも念入りにしてもらい　見違えるようにきれいになりました。 佐々木塗装さんにお願いして本当に良かったです。 ありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/10/12 リュウ様</span>
              <br />
              外壁塗装と瓦の葺き替えをやって頂きました。
              <br />
              職人さんの対応もとてもよく、仕上がりも物凄く綺麗です。ありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/8/14 BlackRabbit San様</span>
              <br />
              今回、実家の２回目の塗替えをお願いしました。前回、父の代でのお仕事ぶりを知っておりましたので、今回も「まかせるなら佐々木塗装さん」で、一択でした。驚いたのは、見積もりの際にドローンを利用した空撮での外観チェック。3DCADにデータを起こしての正確な所要量計算です。かなり正確な見積もりを、スピーディいただきました。今どきだなぁ～と感心しました。５パターンくらいの見積もりを説明いただき、こちらの希望もヒアリングしてもらって、最適というところをいっしょに確認できたと思います。その他、ご近所への工事のあいさつ回りや、日々の作業日記の交換もしていただいて、自分は離れたとこに住んでいるのですが、丁寧で細かい配慮が感じられて、離れていても安心感がありました。塗装の腕については言わずもがなです。何も問題ありません。見違えるようにリフレッシュされ、おまかせして大正解です。猛暑の中、作業現場は過酷な環境であったと思います。本当にありがとうございました。そして、今後ともよろしくお願いします。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/7/11 エルモ様</span>
              <br />
              外壁・室内がとても綺麗になり満足してます。　社長さんはじめ社員さん、職人さんに親切にしていただき嬉しかったです。有り難うございました。
            </li>
            <li>
              <StaticImage src='../images/star4.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/5/20 大上時美様</span>
              <br />
              しかっり、いい仕事をしてもらいました。感謝してます。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/5/5 柴犬リキ様</span>
              <br />
              とてもキレイに外壁塗装してもらいました。家の回りも高圧洗浄でキレイになって満足してます。スタッフさんや職人さんも感じがよくとても丁寧で質の高い仕事をしてくれて本当に良かったです。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/4/21 sakuramai touya様</span>
              <br />
              対応が素晴らしく丁寧な会社です。会社の方で近所の方々へ挨拶までして貰いました。今回下手くそなトータテリフォームセンターでボコボコに壊された上にサポートすらして貰えなかった雨戸の戸板と雨戸の尻拭い工事で再々塗装をお願いしました。他社の失敗の尻拭い工事だったので塗装面積も少なく何だか申し訳無かったです。それでも親切に対応して貰いリーズナブルな価格で仕事を引き受けて頂き凄く有難かったです。佐々木塗装さんに工事を依頼する為に電話した時、亡き父親の事を良く知っていらしたので、それを知っていたら最初からこちらに頼んだのにと凄く後悔しております。名前が佐々木塗装さんなので塗装だけのイメージが有りますが基本的にリフォーム全般を扱っており、名前だけが有名で高額な設計料を払った上に手数料ばかり取り割高で下手な業者に依頼するより圧倒的に佐々木塗装さんの方が100倍良いです。亡き父親が生きていたら最初からこちらでリフォーム工事全般をお願いしていたと思います。とても良い会社で申し分の無い仕事だったので本当に勿体ない事をしました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/4/12 立山多輝久様</span>
              <br />
              外壁の塗装をお願いしました。忖度なしに評価させてもらいます。一番最初に足場の入り口用に駐車場をつぶさないといけないと言われ、さすがに作業期間中ずっと他に車を置いておけるスペースもないので、別の場所に入り口を作ってもらいました。こちらから申し出なかったらそのままだったと思うと、そこは少しだけ残念。ただ、そこを差し引いても仕事は丁寧にしていただき、満足しております。毎朝きっちり同時刻に来て、作業をすすめられていました。一通り外壁塗装の作業が終わった後も、入念に確認し、雨樋やベランダやすのこも塗ってもらったりと、いろいろよくしてもらいました。ありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/3/18 MASA K様</span>
              <br />
              この度、外壁塗装をお願いしました。見積りの段階からすごく丁寧で安心できました。仕上がりは『最高でーす』のひと言。新築時より綺麗になったと言っても過言ではありません。今回任せて正解でした。
              <br />
              たいへんありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star4.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2023/2/23 坂田昭和様</span>
              <br />
              工事期間は少し長くなったが工事は丁寧でした。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/12/27 ゆうこ様</span>
              <br />
              軒天の色の変更にも快く応じて頂きありがとうございました。職人さんも感じのいい方で、丁寧に対応して頂き感謝しています。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/10/20 中田良枝様</span>
              <br />
              丁寧で、キレイに作業して頂きました。ありがとうございます。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/10/19 レッドブルー様</span>
              <br />
              外壁塗装ありがとうございました。社長、スタッフさんの対応に心がこもっており、親切丁寧な説明でとても安心できました。工事完了後はまるで新築の様な外観に仕上がっていて大変感動しました。
            </li>
            <li>
              <StaticImage src='../images/star4.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/10/12 久保雄造様</span>
              <br />
              佐々木塗装さんには見積もりから、丁寧な説明して頂きましまた、３回塗りを契約しましたが塗装担当のかたが小さなところまできれいに丁寧に仕上げて頂きました、知人にお勧めしたいと思います
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/10/5 松木俊博様</span>
              <br />
              きめ細やかな配慮と丁寧な仕事ぶりに心から感謝しております。プライバシーも理解していただいて大変ありがたかったです。引き続きよろしくお願いします。松木
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/8/18 福田叔将様</span>
              <br />
              営業.職人の方が非常によい方でした。塗装も綺麗にして頂き満足してます。ありがとございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/7/28 藤原千恵様</span>
              <br />
              古くなっていた屋根や外装が見違えるほど綺麗になりました。作業して下さった方々も親切、丁寧で、佐々木塗装さんにお願いして良かったです。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/7/28 しまちゃん様</span>
              <br />
              この度は我が家の屋根カベを綺麗にして頂きとても気持ち良くなりました。見積もりからご近所への挨拶も丁寧にして頂きました。社長さんをはじめ社員さん職人さん、他の工事業者の方まで柔らかく丁寧な作業に佐々木塗装さんにお願いして本当に良かったです。ありがとうございました。他にも窓ガラスをオシャレな二重窓にしてもらったりと色々お家の事もされているので、また何か改装するときは佐々木塗装さんにお願いしたいです。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/7/26 ネコずきS</span>
              <br />
              社長さんはじめ社員の皆さん、職人さん皆さん爽やかで感じのいい方ばかりでこちらも毎日爽やかな気持ちで過ごせました。ありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/5/25 ココナッツ様</span>
              <br />
              高評価: プロ意識, 品質, 外壁塗装をお願いしましたが、見積りの時から丁寧な対応と分かりやすい説明をして頂いたので、信頼して依頼することができました。職人の方々の丁寧な作業にもとても感謝しています。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/5/20 中田由岐恵</span>
              <br />
              外壁塗装をお願いしました。どんな色にするか迷いましたが、色見本を作っていただき気に入った色に塗装する事が出来ました。施工中も工事予定・進捗状況の説明があり、工事状況がよく分かりました。職人の方々に細かいところまで丁寧に仕事をしていただき、きれいになり気持ちいいです。ありがとうございました。残念なのは、外構の塗装色を慎重に決めなかった事です。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/5/12 岡下英未様</span>
              <br />
              高評価: プロ意識, 品質,収納のアドバイスをして頂きました。 思い浮かばなかった収納の仕方もあったので勉強になりました！部屋がスッキリして嬉しいです！ありがとうございました！
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/4/13 西田祥子様</span>
              <br />
              高評価: プロ意識, 対応の早さ, 時間を厳守したか 皆さんまじめで几帳面にお仕事され周りにも気遣いが良かったです。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2022/4/3 木村紀子様</span>
              <br />
              高評価: プロ意識, 対応の早さ, 時間を厳守したか 外壁塗装工事が終わってひと月が経ちましたが家を見るたびに本当に綺麗にして頂いたと実感しています 本当に有難うございました！感謝の言葉以外ありません。 社員さん職人さんの丁寧且つ真摯な対応、仕事には頭が下がるばかりでした。 佐々木塗装さんに工事をお願いして本当に良かったと思っています これからも宜しくお願いいたします!
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2021/10/16 hiro ban様</span>
              <br />
              15年ぶり2回目の塗装です。値段は安過ぎず高過ぎず、技術力は高く信頼のできる業者さんを選びたくて3社と商談しました。決め手に困りましたが、地元での施工実績が多い事が信頼の証と思いました。工事が始まるとスタッフの方や職人さんが次々と来られました。皆さん親しみのある方々でしたが、仕事は厳しく取り組んでおられました。その姿に感謝しかありませんでした。佐々木塗装さんにお願いして良かったです。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2021/9/7 香様</span>
              <br />
              佐々木塗装さんには、家の外壁塗装をお願いしました。 職人さんも親切、丁寧な対応でとても安心できました。 仕上がりもとてもきれいで大変満足しています。 ありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2021/8/26 mm12yuu様</span>
              <br />
              他社で何件か見積を出してもらっていましたが、比べ物にならないくらい佐々木塗装さんの見積書は事細かく記載してあり説明も詳細にして頂いたり施工事例の場所まで連れて行って頂いたりと、とても丁寧でした。 仕上がりも綺麗でありがとうございました♪ サービス: 屋外の塗装
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2021/6/28 松田和明様</span>
              <br />
              この度、佐々木塗装さんには築40年余りの我が家の外壁塗装、雨樋の取り替え、柱塗り等の工事をしてもらいました。柱の木目部分が多くて職人さんには大変だったと思います。外から見ると新築のようになり嬉しく思っています。
              <br />
              佐々木塗装さんは優れた職人さんをおもちで、コツコツときめ細かい仕事をしていただき本当に心から感謝しております。 M.H
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2021/6/16 yuji様</span>
              <br />
              外壁塗装と玄関ドアの交換を依頼しました。 しっかりとした事前調査や見積書の提示があり、施工方法や塗料の種類など熱心に説明して頂きました。従業員の方はとても礼儀正しく、毎日コツコツ丁寧に頑張っておられ、熱心な仕事ぶりに感心いたしました。細かい部分までしっかり塗装されており、とても良い仕上がり具合に大変満足しております。 ありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2021/5/16 平元裕太郎様</span>
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2021/4/8 林裕美様</span>
              <br />
              最初の打ち合わせから細かいところまでこちらの要望を聞き入れてもらいました。施工事例を見せてもらったり実際のお宅まで連れて行ってもらえたので安心してお任せできました。工事が始まってからもその都度確認してもらえるところもよかったです。色々アドバイスもしてもらえたのでたすかりました。最後の日には家の周りをきれいに掃除してもらえ工事前よりきれいになっていました。リモートワークをしている時間は音が出ないように配慮してもらい問題なく仕事ができました。ありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2020/9/16 makoto ichibu様</span>
              <br />
              外壁塗装と数箇所のリフォーム実施にあたり、佐々木塗装様には見積、工事内容の説明等、PCを駆使され詳しく説明していただきました。また、工事実施中は作業員様のその日の工事内容等詳細に作業日誌に記入提示していただき、安心することができました。大変ありがとうございました。思った以上に綺麗に完成し感謝しております。 この出会いに感謝します。 ありがとうございました(*^.^*)
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2021/12/8 GEK ZZR様</span>
              <br />
              外壁塗装をお願いするなら「佐々木塗装」さまと以前から決めていました！ 社長と奥さまには何度も足を運んでいただき感謝しております。施工担当の方も良い人ばかりで共働きの我が家でも安心してお任せすることができました。 外壁の仕上がりはもちろんのこと、細かな配慮やサービスも含め、佐々木塗装さまに施工していただいてとても満足しております。 本当にありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2020/5/15 ミヤモトユキコ様</span>
              <br />
              屋根工事をお願いしました。これで、雨の日の不安がなくなり、仕事も丁寧で早く施工していただいたので大変満足しています。ありがとうございました。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2020/5/20 見門勝様</span>
              <br />
              出来上がりの外観が思った以上に素晴らしかった。新築のようになり感激しております。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2020/7/8 高木秀人様</span>
              <br />
              丁寧な工事と心づかいに満足している。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2020/6/1 藤田範子様</span>
              <br />
              職人さんが一から丁寧に仕事されていてとても好感が持てましたし、仕上がりにも大満足です。 色に迷った際も施工例や見本などしっかり顧客の要望を聞いた上で提案して下さり有り難かったです。 地域密着でアットホームな雰囲気なのでまた何かあったら是非お願いしたいです。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2020/6/1 chika fukunaga様</span>
              <br />
              とてもキレイに仕上がって、大満足です。 職人さんも、営業の方も、スタッフ全員感じが良く、挨拶もきちんとされご近所の方にも丁寧に作業されているね、とほめられました。ペイペイを使ってポイント還元もあり、とてもお得にキレイになり得した気分です(笑) 工期の間、気になる事があって連絡したら、直ぐに対応して下さったので安心も出来ました。 塗装の事で友達に相談されたら、佐々木塗装さんを絶対に薦めたいと思います！ ありがとうございました
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2020/5/6 matsuura masaki様</span>
              <br />
              大変丁寧に対応していただき好感が持てました。 もちろん塗装の仕上がりにも満足しております。 次回もお願いしたいです。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2020/4/20 Kaori Homma様</span>
              <br />
              とても丁寧で満足の仕上がりでした。細やかな気配りをしていただき、信頼できる会社です。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2020/4/8 三谷謙三様</span>
              <br />
              近所の方にもキレイになったと言われ満足しております。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>2020/3/28 Eared owl</span>
              <br />
              この度は有り難う御座いました。 職人さんも対応が良く、思った以上の仕上がりに満足しております。 近所のからの評判も良いです。今後とも宜しくお願いします。
            </li>
            <li>
              <StaticImage src='../images/star5.png' width={100} height={16} alt='口コミ評価' className='star_icon' /> <span className='bold'>満井宏昭様</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default kuchikomi;
