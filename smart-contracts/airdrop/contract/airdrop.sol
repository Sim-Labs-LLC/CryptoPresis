// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface IERC20 {
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
}

interface IERC721 {
    function safeTransferFrom(address from, address to, uint256 tokenId) external;
}

interface IERC1155 {
    function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external;
}

contract BulkAirdrop {
    constructor() {}

    function bulkAirdropERC20(IERC20 _token, address[] calldata _to, uint256[] calldata _value) public {
        require(_to.length == _value.length, "Receivers and Amount are different lengths");
        for (uint256 i = 0; i < _to.length; i++) {
            require(_token.transferFrom(msg.sender, _to[i], _value[i]));
        }
    }

    function bulkAirdropERC721(IERC721 _token, address[] calldata _to, uint256[] calldata _id) public {
        require(_to.length == _id.length, "Receivers and IDs are different lengths");
        for (uint256 i = 0; i < _to.length; i++) {
            _token.safeTransferFrom(msg.sender, _to[i], _id[i]);
        }
    }

    function bulkAirdropERC1155(IERC1155 _token, address[] calldata _to, uint256[] calldata _id, uint256[] calldata _amount) public {
        require(_to.length == _amount.length, "Receivers and Amounts are different lengths");
        for (uint256 i = 0; i < _to.length; i++) {
            _token.safeTransferFrom(msg.sender, _to[i], _id[i], _amount[i], "");
        }
    }
}