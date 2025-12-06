import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">QZQ Studio 隐私协议</h1>
        
        <div className="space-y-6 text-sm leading-relaxed">
          <p className="font-bold">【特别提示】</p>
          <p>本游戏通过 taptap.cn 平台独家发行，不含任何内购、广告或付费内容，仅面向 16 周岁（含）以上用户。<br/>QZQ Studio 自身不存储任何可识别个人身份的信息；所有账号、实名、存档、社区功能均由 TapSDK / TapTap 服务 提供。若您未满 16 周岁，请立即退出并删除应用。</p>
          
          <h2 className="font-bold">一、信息收集与存储说明</h2>
          <p className="font-bold">1.1 账号与登录</p>
          <p>• 游戏内"注册/登录/实名"全程调用 TapSDK；QZQ Studio 仅收到 TapTap 返回的 匿名 openId 及 年龄段标识（16+），不获取手机号、身份证、昵称、头像等任何原始个人信息。</p>
          <p className="font-bold">1.2 游戏进度</p>
          <p>• 存档、成就、排行榜全部写入 TapTap 云存档；本地仅保留加密缓存，卸载即彻底删除。</p>
          <p className="font-bold">1.3 设备与日志</p>
          <p>• 为反作弊与崩溃统计，TapSDK 会收集 IP、OAID、系统版本、错误日志；QZQ Studio 服务器端不保存上述数据，仅实时查看匿名汇总报表。</p>
          <p className="font-bold">1.4 支付</p>
          <p>• 本游戏无内购、无广告、无付费入口，不存在支付信息。</p>
          <p className="font-bold">1.5 内容互动</p>
          <p>• 论坛、评价、截图等均提交至 TapTap 社区，QZQ Studio 不存储任何用户发布内容。</p>
          
          <h2 className="font-bold">二、信息使用目的</h2>
          <p>① 确认用户已通过实名且年满 16 周岁；<br/>② 读取 TapTap 云存档以同步游戏进度；<br/>③ 基于匿名汇总数据修复 BUG 与平衡关卡难度。</p>
          
          <h2 className="font-bold">三、信息共享与公开</h2>
          <p>QZQ Studio 无个人数据存储，因此不存在共享、转让或公开披露情形；如未来业务变更需自建服务器，将先行更新协议并重新征得您的明示同意。</p>
          
          <h2 className="font-bold">四、您的权利</h2>
          <p className="font-bold">4.1 查询/更正/删除：</p>
          <p>请在 TapTap 客户端"账号→隐私中心"自助操作；TapTap 完成处理后，游戏端同步生效。</p>
          <p className="font-bold">4.2 注销：</p>
          <p>在 TapTap 账号中心申请"永久注销"，注销后 15 日内 TapTap 删除其侧全部数据，游戏侧匿名缓存随之清空。</p>
          <p className="font-bold">4.3 撤回同意：</p>
          <p>关闭 TapTap 授权或卸载游戏即可；QZQ Studio 不保留任何副本。</p>
          
          <h2 className="font-bold">五、未成年人保护</h2>
          <p>本游戏禁止 16 岁以下用户进入。TapTap 实名系统未返回"16+"标识时，游戏自动强制退出。监护人发现未成年人已绕过限制的，可邮件至 sa@hpyshark.com，我们将在 3 个工作日内联动 TapTap 进行账号封禁与数据清除。</p>
          
          <h2 className="font-bold">六、协议变更</h2>
          <p>如因版本更新或法规变动需调整本协议，将通过 TapTap 社区公告 与游戏登录弹窗提示；若您继续使用即视为接受更新内容。</p>
          
          <h2 className="font-bold">七、联系我们</h2>
          <p>QZQ Studio 个人信息保护联系邮箱：sa@hpyshark.com（工作日 10:00-18:00，承诺 3 日内回复）</p>
          
          <h2 className="font-bold">八、法律适用与争议解决</h2>
          <p>本协议适用中华人民共和国大陆地区法律。因本协议产生的任何争议，任一方可向被告住所地有管辖权的人民法院提起诉讼。</p>
          
          <p className="font-bold">【生效日期】2025 年 01 月 01 日</p>
        </div>
      </div>
    </div>
  );
}