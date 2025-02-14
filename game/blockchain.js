// 确保 ethers 已加载
if (typeof ethers === "undefined") {
    console.error("ethers 库未加载");
  }
  
  // 初始化 provider 与 signer
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  let signer;
  
  async function connectMetamask() {
    try {
      await provider.send("eth_requestAccounts", []);
      signer = provider.getSigner();
      console.log("Account address:", await signer.getAddress());
    } catch (error) {
      console.error("Connect metmask error:", error);
    }
  }
  
  async function claimTokens() {
    try {
      const runTokenContractAddress = "0xc656C8Aa71C0b6b8d362420D2d19b5Eb5C8c0b93";
      const runTokenContractAbi = [
        "function mintTokens(address account, uint256 amount) public"
      ];
      const runTokenContract = new ethers.Contract(runTokenContractAddress, runTokenContractAbi, provider);
      const convertToWei = 1000000000;
      // 这里示例直接使用一个固定的数值，可根据实际逻辑计算 window.totalGweiScore
      let amountToClaim = 1 * convertToWei;
      await runTokenContract.connect(signer).mintTokens(await signer.getAddress(), amountToClaim.toString());
      console.log("Tokens claimed");
    } catch (error) {
      console.error("claimTokens error:", error);
    }
  }
  
  async function claimNft() {
    try {
      const nftContractAddress = "0x2ec8f9AA112f5a0a42bF9aB0C8dFf638514baE00";
      const nftContractAbi = [
        "function mint(uint256 amount) public"
      ];
      const nftContract = new ethers.Contract(nftContractAddress, nftContractAbi, provider);
      // 示例默认 mint 1 个 NFT，可根据实际逻辑替换 window.totalNFTScore
      await nftContract.connect(signer).mint(1);
      console.log("NFT claimed");
    } catch (error) {
      console.error("claimNft error:", error);
    }
  }