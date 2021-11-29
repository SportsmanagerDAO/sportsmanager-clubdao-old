/* eslint-disable react/no-children-prop */
import React, { Component } from "react";
import factory from "../eth/factory.js";
const abi = require("../abi/KaliDAO.json");
import web3 from "../eth/web3.js";
import Link from "next/link";
import { Flex, Heading, Text, Icon, HStack, UnorderedList, ListItem } from "@chakra-ui/react";
import FlexGradient from "./FlexGradient.js";

import {
  BsFillArrowUpRightSquareFill
} from 'react-icons/bs';

class DaoInfo extends Component {
  render() {
    const { dao, chainInfo, holdersArray } = this.props;
    
    return (
      <FlexGradient>
        <Text>Name: {dao["name"]}</Text>
        <HStack><Text>Address: {dao["address"]}</Text><Link href={`${chainInfo["explorer"]}/address/${dao["address"]}`}><Icon as={BsFillArrowUpRightSquareFill} /></Link></HStack>
        <Text>Symbol: {dao["symbol"]}</Text>
        <Text>Shares: {dao["totalSupply"]}</Text>
        <Text>Transferable: {dao["paused"]}</Text>
        <Text>Voting period: {dao["votingPeriod"]}</Text>
        <Text>Quorum: {dao["quorum"]}</Text>
        <Text>Supermajority: {dao["supermajority"]}</Text>
        <HStack><Text isTruncated>Docs: {dao["docs"]}</Text><Link href={`${dao["docs"]}`}><Icon as={BsFillArrowUpRightSquareFill} /></Link></HStack>
        <Text>Members:</Text>
        <UnorderedList>
        {holdersArray.map((h, index) => (
          <ListItem>{h[0]} ({web3.utils.fromWei(h[1], 'ether')} shares)</ListItem>
        ))}
        </UnorderedList>
      </FlexGradient>
    );
  }
}

export default DaoInfo;
