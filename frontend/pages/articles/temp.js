export const article = {
  id: "2",
  is_display: 0,
  title: "Byzantine generals problem, blockchain and consensus",
  author_name: "",
  author_image: "",
  author_email: "ha.nguyen@icetea.io",
  hashtags: "#technology #knowledge #research",
  content:
    '<p>The demand for understanding concepts of blockchain technology continues to grow, especially for beginners. One of the notable concepts pertaining to the blockchain landscape which has been troubling beginners refers to the Byzantine Generals’ Problem. The Byzantine generals have a lot to explain to us about the possibilities of system failure. When it comes to blockchain, the Byzantine Generals Problem solution becomes clearly evident in terms of consensus. In this article, we will talk about the Byzantine generals problem and why it matters in blockchain technology.</p><h2><strong>1. Two generals\' problem</strong></h2><p><strong><img src="https://lh3.googleusercontent.com/sYFkvYlVUiincEzp5fd6TFnICBo00YiomXmtDyr44S-WZXoZniP0EQouYJKLjyY_lChXGPEqjK0pNLRqySAn1Zc238GCqqUHF_HfqDo9TWiwpaannwL_brGSgmb6Zef4mHFiX0Z4xf2UrAc44O72AhNxIqTWCeZKAmRSLyRA5egsmZL6QqpQky7zWQ"></strong></p><p><i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Source: finemactics.com</i></p><p>Before jumping into the Byzantine generals problem, let us talk about the Two generals\' problem first. In computing, the Two Generals\' Problem is a thought experiment meant to illustrate the pitfalls and design challenges of attempting to coordinate an action by communicating over an unreliable link.&nbsp;</p><p>In the experiment, two generals are only able to communicate with one another by sending a messenger through enemy territory. The experiment asks how they might reach an agreement on the time to launch an attack, while knowing that any messenger they send could be captured. So there will be 4 scenarios may happen, refer to the below table for details</p><figure class="table"><table><tbody><tr><td><strong>General A</strong></td><td><strong>General B</strong></td><td><strong>Result</strong></td></tr><tr><td>Attack</td><td>No attack</td><td>Fail</td></tr><tr><td>No attack</td><td>Attack</td><td>Fail</td></tr><tr><td>No attack</td><td>No attack</td><td>Fail</td></tr><tr><td>Attack</td><td>Attack</td><td>Success</td></tr></tbody></table></figure><p>So the best scenario is the two generals reach a consensus and attack the enemy territory at the agreed-upon time. We may illustrate in order to understand the problem more specific as follows</p><ul><li>General A sends the message to General B to agree on the time to attack.</li><li>General B receives the message, agrees on the time to attack and responds to General A&nbsp;</li><li>General A receives the message and is ready to attack at the agreed-upon time.&nbsp;</li><li>General B may hesitate to attack due to the risk of being a sole attacker, and the messenger carrying the message could face capture. Therefore, General B continues to wait for General A to reply to his message.</li><li>Both generals will always be left wondering whether their last messenger got through</li></ul><p>Instead of two generals, let’s imagine two computer systems talking to each other. The main problem here is again the untrusted communication channel and inconsistent state between two machines. A very common example that always comes up when talking about the Two Generals’ Problem is the TCP protocol.</p><h2><strong>2. Byzantine Generals’ Problem</strong></h2><p>The Byzantine generals problem was presented by three computer scientists Leslie Lamport, Robert Shostak and Marshall Pease in a scientific report entitled "The Byzantine Generals Problem" in 1982. This is a generalization of the two generals\' problem.&nbsp;</p><p>The Byzantine generals problem describes a group of generals in the Byzantine army (the army of the Byzantine Empire), conducting a siege of a city. The generals need to talk to reach an agreement on the plan to attack that city. In the simplest case, they agree on whether to attack or retreat. Some may want to attack, but some want to retreat, and the problem is that if there is only a single unit of attack, they will fail, and that is a worse plan than attacking together, or retreat together.</p><p><img src="https://lh4.googleusercontent.com/eCtK4TCCt9xAQo7nJwYb8t4EudYu96pNPyEvHMExdGGHkjp7XdLxU-QxguX7SXvJGoKrevjDmLlBo5tCE0PGgrNi-mVoo6LXUVVA3r_jATSydIdFqWAIGF5E3wf5jY85ABOTXLMBEht4m3kCZ-COOknT6ZOgg7MFk5EgP_mHQ1mK4Eh2K65XpIQSAg"></p><p>Let us dig into this example, we assume that any general is able to send messages to every general. Assume that, two generals send the message saying that they decide to attack, the other two decide to retreat, the fifth general is a traitor. The fifth general sends 2 “attack” and 2 “retreat” messages. Then the attackers and retreaters both think that the majority want to attack and retreat, respectively, and they will carry out the action. Literally, they do not reach a consensus.&nbsp;</p><p>The situation gets even more complicated when messengers - the people who are responsible to send messages - could face capture. So there will be cases of messages being modified, or sent to the wrong destination.</p><p>There are quite a few solutions mentioned by Lamport, Shostak and Pease. They begin by noting that the Byzantine generals problem can be solved by reducing it to the "Commander and Lieutenants" problem.</p><h3><strong>2.1. Problem definition:&nbsp;</strong></h3><ul><li>A commander sends messages to every lieutenants</li><li>A lieutenant is able to send messages to other lieutenants</li><li>How loyal lieutenants can reach a consensus for instance: they are all attack or retreat together</li></ul><p>Three computer scientists Lamport, Shostak and Pease have come up with an Oral Messages (OM) algorithm to solve this problem. In order for all to reach a consensus, we need to rely on the choice of the majority.</p><h3><strong>2.2. Message Passing Assumptions:</strong></h3><ul><li>Every message that is sent is delivered correctly.</li><li>The receiver of a message knows who sent it.</li><li>The absence of a message can be detected.<br>&nbsp;</li></ul><h3><strong>2.3. Theorem</strong>:&nbsp;</h3><p>With each value m being the number of traitors, the OM(m) algorithm can reach a consensus if there is a total of more than 3m number of commanders.</p><p>In other words, if there are a total of n commanders, then the OM algorithm will reach consensus when 2/3 are loyal (or no more than 1/3 are traitors).&nbsp;</p><p>Let\'s take a look at a simple case, with 1 commander and 3 lieutenants (including C, L1, L2, L3), and one of them is a traitor, as follows.</p><p><img src="https://lh4.googleusercontent.com/HrdiAJLrYjHKa0SccjzCMqicMPHoiC_W7AP_MxS7KHt4bPzTrpAGmyASuIk4LE1_bhIIjr8Rjxzddau6xhoSNcQQ3HIUnDfiBzuegQi2elcP4YFpcQrUYS5CsHjA8LY34Y2-gfpDaxKpTt2ktEXcQdxkbP1hJvyeuy9PYYvWmrKWlkuL5k_vATDDsQ"></p><ul><li>Scenario 1, the traitor is L3. C will broadcast a message with content v for L1, L2, L3. L3 is a traitor so L3 will modify the content, and send x to L2. However, L2 will receive v from L1 and C and will see that the majority chose v. From there, loyal commander/lieutenants, including C, L1 and L2 will reach a consensus as to option v, even though L3 has broadcast message x.</li><li>Scenario 2, the traitor is C. C can send x to L1, send y to L2 and send z to L3. L1, L2, L3 are all loyal, so will broadcast the messages they receive to others. Thus, L1 will receive all 3 messages, which are x (from C), y (from L2) and z (from L3). It may seem impossible to decide, but actually, the decision of all 3 people will be the same, because the same majority(x,y,z). If x, y, z carry completely different contents, and cannot be weighted, all will follow the default choice, here it could be a retreat, for example.</li></ul><p>&nbsp;</p><h2><strong>3. Byzantine Fault Tolerance (BFT)</strong></h2><p>In a few words, Byzantine fault tolerance (BFT) is the property of a system that is able to resist the class of failures derived from the Byzantine Generals’ Problem. This means that a BFT system is able to continue operating even if some of the nodes fail or act maliciously.&nbsp;</p><p>There is more than one possible solution to the Byzantine Generals’ Problem and, therefore, multiple ways of building a BFT system. Likewise, there are different approaches for a blockchain to achieve Byzantine fault tolerance and this leads us to the so-called consensus algorithms.</p><p>In 1999, two computer scientists Miguel Castro and Barbara Liskov introduced the "Practical Byzantine Fault Tolerance" (PBFT) algorithm that can manage Byzantine states with a high performance, can handle thousands of requests per second with extremely low latency.</p><h2><strong>4. Byzantine Generals Problem &amp; Blockchain &amp; Consensus</strong></h2><p>Blockchain is a shared ledger for all members in a decentralized network. There is no trusted third party to manage its operation, but the members of the system themselves have to interact with each other to reach a consensus. In other words, a Blockchain system needs a method to tolerate Byzantine faults.</p><p>When Bitcoin, the first blockchain, was born, its creator, Satoshi Nakamoto, also introduced a method to solve the Byzantine<strong>&nbsp;</strong>generals problem, called Proof-of-Work (PoW). Although the concept of Proof of Work is older than cryptocurrencies, Satoshi Nakamoto developed a modified version of it as an algorithm that enabled the creation of Bitcoin as a BFT system.</p><p>Note that the PoW algorithm is not 100% tolerant to the Byzantine faults, but due to the cost-intensive mining process and the underlying cryptographic techniques, PoW has proven to be one of the most secure and reliable implementations for blockchain networks. In that sense, the Proof of Work consensus algorithm, designed by Satoshi Nakamoto, is considered by many as one of the most genius solutions to the Byzantine faults.</p>',
  references:
    '<ul><li><a href="https://101blockchains.com/byzantine-generals-problem/">https://101blockchains.com/byzantine-generals-problem/</a></li><li><a href="https://en.wikipedia.org/wiki/Two_Generals%27_Problem">https://en.wikipedia.org/wiki/Two_Generals%27_Problem</a></li><li><a href="https://lamport.azurewebsites.net/pubs/byz.pdf">https://lamport.azurewebsites.net/pubs/byz.pdf</a></li><li><a href="https://en.wikipedia.org/wiki/Byzantine_fault#:~:text=The%20term%20takes%20its%20name,of%20these%20actors%20are%20unreliable">https://en.wikipedia.org/wiki/Byzantine_fault#:~:text=The%20term%20takes%20its%20name,of%20these%20actors%20are%20unreliable</a>.</li><li><a href="https://viblo.asia/p/bai-toan-cac-vi-tuong-byzantine-va-ung-dung-trong-blockchain-jvEla4vmZkw">https://viblo.asia/p/bai-toan-cac-vi-tuong-byzantine-va-ung-dung-trong-blockchain-jvEla4vmZkw</a></li><li><a href="https://academy.binance.com/en/articles/byzantine-fault-tolerance-explained">https://academy.binance.com/en/articles/byzantine-fault-tolerance-explained</a><br>&nbsp;</li></ul>'
}