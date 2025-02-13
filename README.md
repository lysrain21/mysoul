## 宏观大框架

⼈类的创造⼒是⽆限的。⽽在绝⼤部分⼈类历史中，创造⼒的发挥实际上是⼀种奢侈品。随着科技与 电⼦游戏的发展，以及多元⽂化逐步成为主流，让⼈们有了更多渠道去发挥⾃⼰的创造⼒。 在这基础下，很多⼈往往都希望这个世界是依靠⾃⼰的想法存在，运⾏的，这种架空世界的玩法是⼈ 们发挥创造⼒的⼀种主要⽅式，这也是《Minecraft》成为世界上极为畅销的游戏的原因。这款诞⽣于 2008年的游戏⾄今依然有许多玩家为之着迷，它为玩家提供的创造⼒是这款游戏⽣⽣不息的重要原 因。 ⽽科技是不断向前的，《Minecraft》也有⾃⼰的局限性。好的创意也需要有好的⼯具来实现，⽽ 《Minecraft》这个⽤于激发⼈们创造⼒的⼯具对于科技突⻜猛进的现在，显得有点“⼼有余⽽⼒不 ⾜”了。在这种背景下，《MySoul》的想法出现了，我们⼒图基于⽣成式AI来辅助⼈类创造⼒，更加 便利地协助⼈类激发创造⼒。

## 分析需求和痛点

现在主流的游戏，玩家往往都是在游戏设计师的精心安排下，体验游戏情节的。玩家更多是被动的接受游戏设计师的规则，在这种情况下，不喜欢被规则限制的玩家培育出了沙盒类的游戏，但是纵观现在的多数沙盒游戏，都正在陷入“堆料”陷阱，而真正的玩法创新却少则又少。
而AI时代的到来让一切充满了可能性。如何利用AI去创新玩法，是游戏发展的趋势。
利用AI游戏变得更加具有互动性，从被动的接受变为主动的创造。再次以《Minecraft》为例，这个前AI时代最成功的沙盒类游戏，完成了场景的自我创建，让每个人都有能力去发挥创造力，现在新时代的游戏来了。我们不是场景的自我创建，而是故事的自我创建，通过AI技术，完成这一步骤。

## 提出我们的产品和服务

视觉的方法放置物品，AI根据物品放置情况生成冒险故事，该冒险故事可以用于剧本杀的剧本创作和跑团游戏的脚本，同时能够放置众多agent来和主角一起玩跑团游戏。
同时将数据上链，或者完成某个内容后能够得到NFT作为奖励。（待完善链上产品内容）

## 介绍团队

游子扬：资深游戏玩家，AI游戏框架设计师
刘川川：agent开发者，web全栈开发
李禹申：agent开发者，AI+web3研究员

## 产品逻辑是什么

上链的逻辑是什么（待完善上链后整个游戏的产品逻辑）

## 流量/钱从哪里来/投入产出比计算

从推特，reddit上进行宣传，因为国外的“跑团”发展更加充分，再和国内的剧本杀公司进行合作，帮助创作剧本。

## 未来如何发展/优化投入产出比

因为国内对于链的游戏支持力度不大，甚至很多是违法的内容，我们会首先不做成链的形式，像是我的世界甚至模拟世界一样来做产品。

## 定价

按照生成一个故事是多少钱来定价，文字版、图形版甚至最后直到一个完整的游戏。

## 合作品牌

国科智飞，他是世界500强企业爱默生的agent供应商之一，为我们前期的开发工作投入了部分资金，

## 最小产品逻辑

![产品参考图](/Users/liyushen/Documents/base/产品参考图.png)



# Blockchain game

Build a play to earn blockchain runner game that rewards tokens and NFTs

## Technology Stack & Dependencies

- Solidity (Writing Smart Contract)
- HTML, Css, Javascript For the website
- [Infura](https://infura.io/) Account on Infura as a node provider
- [NodeJS](https://nodejs.org/en/) To install Dependencies
- [Hardhat](https://hardhat.org/) Ethereum development environment
- [Ethers.js](https://docs.ethers.io/v5/) To interact with the blockchain

### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ cd contracts
```
```
$ npm install
```

### 3. Deploy NFT collection to Polygon Mumbai testnet
- Setup your env file with both private key and mumbai RPC 
```
$ $ npx hardhat run scripts/deployNFTCollection.js --network mumbai
```

### 4. Deploy Run token to Polygon Mumbai testnet
- Setup your env file with both private key and mumbai RPC 
```
$ $ npx hardhat run scripts/deployRunToken.js --network mumbai
```

### 5. Provide the smart contract addresses in blockchain.js file

Images in the game are taken from https://www.flaticon.com/
