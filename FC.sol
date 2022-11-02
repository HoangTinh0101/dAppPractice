//SPDX-License-Identifier: MIT

pragma solidity ^0.8.6;

contract FooballClub{

    string club;

    function  setClub(string memory _club) public{
        club = _club;

    }

    function getClub() public view returns(string memory){
        return club;
    }
}