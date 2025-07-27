import { ImageCatalog } from "../../../shared/constants";
import { ANTHOLOGY_IMAGES } from "../anthology/constants";
import { Chapters } from "../reader.constants";

export const MICHAEL_IMAGES: ImageCatalog = {
  bloodLeft: {
    path: new URL('../../../assets/images/books/michael/blood.png?as=webp&height=500', import.meta.url),
    alt: 'go back',
  },
  bloodRight: {
    path: new URL('../../../assets/images/books/michael/blood.png?as=webp&height=500', import.meta.url),
    alt: 'go forward',
    shouldHide: true,
  },
  checkLeft: {
    path: new URL('../../../assets/images/books/michael/check.png?as=webp&height=500', import.meta.url),
    alt: 'go back',
  },
  checkRight: {
    path: new URL('../../../assets/images/books/michael/check.png?as=webp&height=500', import.meta.url),
    alt: 'go forward',
    shouldHide: true,
  },
  netLeft: {
    path: new URL('../../../assets/images/books/michael/net.png?as=webp&height=500', import.meta.url),
    alt: 'go back',
  },
  netRight: {
    path: new URL('../../../assets/images/books/michael/net.png?as=webp&height=500', import.meta.url),
    alt: 'go forward',
    shouldHide: true,
  },
  noodlesLeft: {
    path: new URL('../../../assets/images/books/michael/noodles.png?as=webp&height=500', import.meta.url),
    alt: 'go back',
  },
  noodlesRight: {
    path: new URL('../../../assets/images/books/michael/noodles.png?as=webp&height=500', import.meta.url),
    alt: 'go forward',
    shouldHide: true,
  },
  voteLeft: {
    path: new URL('../../../assets/images/books/michael/vote.png?as=webp&height=500', import.meta.url),
    alt: 'go back',
  },
  voteRight: {
    path: new URL('../../../assets/images/books/michael/vote.png?as=webp&height=500', import.meta.url),
    alt: 'go forward',
    shouldHide: true,
  },
  wineLeft: {
    path: new URL('../../../assets/images/books/michael/wine.png?as=webp&height=500', import.meta.url),
    alt: 'go back',
  },
  wineRight: {
    path: new URL('../../../assets/images/books/michael/wine.png?as=webp&height=500', import.meta.url),
    alt: 'go forward',
    shouldHide: true,
  },
} as const;

export const MICHAEL_CHAPTERS: Chapters = [
  [
    {
      title: 'Smoke and Mirrors',
      leftImage: ANTHOLOGY_IMAGES.arrowLeft,
      rightImage: ANTHOLOGY_IMAGES.arrowRight,
    },
      {
          title: 'A Death',
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“No, I mean it,” Michael protested at eight that evening in the castle. The sun lulled him into itchy lassitude coming through the Ivory Parlor's windows. He half-regretted attending the Assembly families' supper at the Castle, and he definitely regretted lingering afterward with Alec. He always humiliated himself with Alec.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      }, 
      {
          text: `His words were running on like a train too close to the cliff's edge for the brakes to save it. His feet rested on the table in front of him, and his legs ached, but he didn't want to ruin his nonchalant appearance by fidgeting. “There's something about Emma,” he said, gesturing too wildly instead. “She’s — ethereal — that’s the word. Like she doesn't belong here, she's above this... It sounds so ridiculous, but I mean something specific, it's a quality I can't capture —”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“She used to be ridiculously shy, and she still hasn’t convinced herself she wouldn’t rather be hiding in her room than mixing with us nasty, petty politician babies,” Alec said.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“Don’t you like her?”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“I mean, she’s sweet, I give you that.” Turning to look at Michael more directly, with the beginnings of a smirk, he added, “It’s not hard to talk to her. She pretty much lives in the east garden, just wander in some afternoon and ask her about books. Evernost stories, she thinks they're the greatest secular source of the sublime in today's society. She actually said that, I kid you not. I wouldn't get my hopes up, though.”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“I don't have hopes —”
          Alec snorted.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“I don't. I know I'm — she hasn't shown any interest, not like that. And I have talked to her. I do. We're friends...”
          How stupid do I look? Michael almost said. Emma would have to marry someone suitable — basically, nobility — and Emma showed no signs of rebelling against “what was suitable.” Quite the contrary. Though usually diffident, she argued for class distinctions more openly than most public figures dared to. Michael had debated the issue with her himself and found her gentle and courteous as always and implacable to the point of absurdity.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Before things got any worse, Michael glanced at the clock. “I’m late for Verna,” he said. “Sorry, see you tomorrow….”
          “Ahh, the young sorcerer, I keep forgetting.”
          `,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,      },
      {
          text: `As he traversed lawns and hedges, Michael wished that Alec would take his apprenticeship seriously — that he would take anything about Michael seriously. It was one of those times he felt that in allowing the Alec’s circle to take him in, even as equivocally and uneasily as he did (perhaps especially — if only he could be friendly with them on equal terms, but instead, however he strove to suppress it, his whole relation to them was a mixture of suspicion and incredulous delight) he was betraying himself. Alec symbolized what was wrong with the court; that knowing half-laugh of his fell on anything serious, save, of course, the unspoken, unshakable seriousness of the tradition behind him.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Well, Michael would show — was showing — them. They laughed at magic — they knew it was either fake or trivial laboratory “triumphs” that only the worst pedant at a university could care about. If he believed Verna — as to which, he always told himself, whatever else you could say about her, she really was honest about these things — she had done and hoped to do things far more marvelous.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Or else he was just offended about Emma. Regardless, as he came panting into the parlor (a large, round room at the center of the building, once used to store garden tools and now furnished with red carpet, some peculiar designer armchairs, and a bookshelf), where they usually met for anything that didn’t involve technical instruments, he felt proud of his odd little teacher.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Odd little teacher — that wasn all wrong. Verna was odd and little, to be sure. It wouldn’t have taken him much to carry her up the stairs; half the time she spoke in the sort of oratory you heard from Assembly delegates of the older generation, and other ladies ridiculed her mercilessly for all sorts of nonsense — but she wasn’t just an eccentric any way you cut it. She was, indefinably, the real thing. It was undeniable because of her achievements, but — Michael thought — it came through more subtly, in an unguarded comment here, a contemptuous silence there...`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“Michael,” she said, sweeping up to him, large eyes smiling with rare excitement. “Today is an important day—more important than you can understand. Come with me; the time has come — and the time has come for you to know my plans, at least, to begin to know them. Up the stairs — walls have ears, my boy, and there is a spell of silence on the whole of the third floor.”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“The third floor?” Michael fought to keep the surprise out of his voice. He expected her to launch into a long explanation of why she was affording him such an honor, but she merely unlocked the door and led him into a hallway walled in the same wavy glass as the rest of the building. Just as on the first and second stories, the floor and inside wall were plain concrete, although she led him around past a cluttered work desk to a richly patterned rug with a small table, a three-legged stool, and an ornately carved, battered chair, into which she sank. The sun slanted in at such an angle that the wall of glass looked like a wall of light.
          `,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“Oh, where to start, my boy, where to start! You’ve been wondering,” she said, “what exactly I plan to do with that net we were making.”
          “I have.” Michael had endured weeks of bloody fingers and magic headaches creating a gold mesh so fine it could pass harmlessly through — well, pretty much anything, wood and stone and even, by now, his own hand (see, even to that what would Alec say?), though with enough resistance you could handle it.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Not that he had expected to find out. You did not pester Verna for explanations, not even when she dropped your magic lessons to quiz you for hours on end about politics, as she had done around this time two years ago. Very patiently he had explained that he believed the perfect king was no king at all, and that even the Assembly was a necessary evil. Even then she had not allowed him to return to magic until she had heard out his entire dream of a classless society in which wealth was shared equally by all, something he was usually only too happy to talk about. Usually — but Verna's expectant yet blank gaze (you were never entirely sure she understood what you were saying) dried up his eloquence.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `At any rate, he did not have high hopes for the current conversation, either. Explanations with Verna were…well….
          “Oh, Michael. You fish, don’t you?”
          “I don't really like it. I used to do it with my uncle, though.”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“Well, I fish, but I don’t give a damn for trout. No, I fish for people. People like you, my boy, but lovelier a thousandfold. Do you know the key to catching a person?”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“What?”
          “The perfect bait! Take — oh, just for example. Let’s take, oh, our princess Emma, shall we? Lovely, our Emma, don’t you see? She can sing, she can paint, she reads everything, she writes pretty little poems, her manners are impeccable — but, mark my words, a fastidious coward. Bad dreams send her running to her father, and she is fifteen. She can’t stand to touch a piece of rotten fruit, she runs screaming from bees in the garden. All’s needed is a great enough scare, and she’ll be mine.”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“Verna — ” he began, wanting, if nothing else, to defend Emma, but she went on.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“You’ll be wondering,” she said, “what would possess anyone to elect such puny stuff over every mortal in the kingdom — and well you wonder. But I have my reasons, and she — that is to say, such a one — need not make the center of my creation — no. I will take the habits, the talents, the skills, something of the sweetness, perhaps — the mind, as it were, really all the window dressing. But for the spirit, or the heart...”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `A moment of—not quite panic, it was too oblique—overcame Michael, and he couldn’t focus on her words. Probably because of the protective magic, he caught himself imagining the light as acid, eating at the connections of his thought.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `When he brought his mind back to her words, she was saying, “Fear obviously can’t work. The best technique is the bait of an innocent in peril, because if your hero won’t go to the defense of such, what kind of hero is she? Of course, I needed a setup clever enough she didn’t see through it, but she suspected nothing, so there was no trouble. Well, Michael, I’ll bet you — no, tell me, as we worked that wire, you and I, did you realize that we were not merely making it finer?”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“I didn’t, though it doesn’t surprise me,” he said. “What were we doing?”
          “We were, you might say, making it less like wire.”
          “Oh?”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“Less like wire, and more like an idea of wire. An idea of a net. To catch, you realize, an idea of a person — the idea that makes a person who she is, not her body.”
          “But,” Michael said, trying to sound as nonchalant — as safe a confidant — as he could, “I have to wonder. Who are you catching the — the idea of?”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“Michael, Michael, all in good time,” she said. “All will be clear. For now it is enough to know that it is a net for their essences. Because in my hands their bodies are nothing — nothing at all.” To prove this, she slapped her own face, and then rose to seize Michael’s arm quite roughly.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `The resulting experience was odd. He'd had a phase where he’d tried to imagine his mind without his body, to understand the difference if there was one. Now, if he wasn’t exactly separated from his body, for the first time he felt strongly and viscerally that the familiar, pasty young man he inhabited was only his by chance. Either he was imagining things, or he was perceiving real things — or the magic here was so strong it was confusing his mind in ways it never had before.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `He shoved his sensations to the back of his mind. “I don’t understand what you'd do with people's essences once you got them.” As she looked at him blankly, he added, “Because I have to say, it sounds mad, frankly, or else pretty awful.”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `He expected her to become serious, wounded, as she sometimes did when he expressed his doubts, but instead, with a twisty half-smile, she said, “Mad’s as may be, Michael, and awful, certainly, at first — but then glorious. There’s a price to be paid, always, but in terms of the end result this one’s so small... I’ll tell you this, though. I’ve decided you’re to marry her.”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“What, Emma? Like you could make her —”
          “Enough. Be on your way, Michael. Tonight is great night, and soon you'll know it...”
          Michael left.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Very few people indeed knew about Verna’s magic. The forms he’d had to sign when he started studying with her still scared him a bit — he’d been only sixteen, too. (Alec, Michael was willing to bet, hadn’t signed the forms. Alec probably wasn’t supposed to know at all, but he and his father were trusted implicitly because of their heritage.)`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Half the people who did know thought it was either fraud or delusion. Michael was used to defending Verna against them. His own father had been among the doubters, despite being one of the first to whom Verna revealed herself, until Michael had convinced him otherwise.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `But this plan? Stealing people’s souls, basically — to form some unknown “creation”? (What in Outland, he wondered, did you make out of souls? Amulets of untold mystic power? Leg warmers?) It sounded like an Evernost story, not real magic. At least, it was well beyond any magic she’d taught him was possible.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `So, either Verna was wrong — or she was right.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Plenty of people, both those who knew about the magic and those who didn’t, thought Verna was mad. Yes, she was odd, as he’d thought earlier that afternoon, and odd (at least, according to Goldie Elmsworth’s gossipy histories of the royal family) in a way that wasn’t inconsistent with a few psychiatric diagnoses. Could she be delusional about her powers? It was possible, Michael acknowledged, but he’d never seen her fail to do a thing she said she could do.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Yes, Michael was deathly afraid she was right, and deep inside himself, he believed she was. Which left him with a problem, because Verna's mention of Emma had not sounded theoretical at all — and she’d said tonight was a special night. Michael found, as he climbed panting up to the Castle parking lot, that he quietly but definitely believed that Verna was going to try steal Emma’s soul — tonight.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `As he realized this, he stopped dead and laughed aloud, perhaps a little hysterically: he, Michael, the pasty nerd, had just uncovered a plot against the heir to the throne — a princess he was in love with, no less. Clearly, he thought distantly, through rising panic, it fell upon him to save her life (the chances she’d reward him with marriage, he thought giddily, were slim to nonexistent). He wished, momentarily, that his twelve-year-old self, steeped in swashbuckling tales of Ye Olde Tymes and spy thrillers, could have guessed he would end up in this place — or even could take his place.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Of course, the right thing to do was not to draw his imaginary sword but to call his father, who would know which Royal Guard members to contact and how to get through to them. As the phone returned a busy signal, though, he caught sight — through a veritable forest of bushes and vines — of a study window glowing golden and a slim someone who almost had to be Emma at a desk, writing.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Feeling foolish, he approached the window and tapped the glass. “Emma,” he called, waving wildly. “Open the window, let's talk.” But Emma jumped and ran from the room, so he made his way toward the castle door.
          Halfway through, though, dizziness hit Michael — or something his mind wanted to smooth over into dizziness. It wasn’t, though. No, the best way he could describe the sensation (and it didn’t make any sense) was that it had been as if he were standing in two identical places at once. It reeked of magic (or his own impending madness, he supposed). He set off running toward the door, and the footmen would not let him in.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“What's going on?” he asked.
          “Don't know,” said a young uniformed man with a crew cut — not much older than he was, Michael judged, with more prosaic disorientation; he could scarcely imagine himself committed to a career as a magician, his best-case scenario, and found the idea of the military positively horrifying. “Can't talk now.”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“I need to talk to—to an officer in the guard,” Michael said. “I have—I have reason to believe there’s a threat to Emma.”
          “Can’t, everyone’s busy,” said the other man.
          Several seconds later, Michael had heard what everyone else had: “Emma's missing.”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `She’d pressed the alarm button on the intercom, and when the guards had come to see what was wrong, she’d been gone. Michael battled his way in to talk to an officer, one he dimly recognized as one of those in the know about Verna’s magic (but Michael was nearly ready to spill the secret to someone who wasn’t). The officer shook his head brusquely at Michael’s garbled story. “Verna is accorded the highest trust,” he said . “If you want to be useful, go ask if she’ll search for the princess.”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“Certainly,” said Michael, marveling that even under circumstances like this, a man who gave orders to one of the most elite branches of the military dared do no more than ask Verna to search. And Michael’s suspicion, after the officer’s curt dismissal, felt like something he’d concocted out of his fantasies and not the other way round. I wasn’t able to explain myself, he thought over and over —but surely he’d communicated enough of his suspicion that the officer should have listened.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Verna assented readily, if distractedly. She seemed completely unperturbed—but, then, nothing fazed Verna. You couldn't deduce much from that.
          Michael sat up watching as Verna performed magic after magic at the King's insistence. He couldn't understand more than a tenth of what she was doing. He tried a few spells of his own, hesitantly, and received results he lacked the skill to interpret: results that could mean Outland, the afterlife, or nowhere at all.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `When, at 5:30 the next morning, the messenger barged in, climbed to the second floor, and announced that Emma had been found dead, shot in the head, Verna simply said, “Ah,” and continued carving symbols onto plywood with a needle. After a few moments' fuddled silence the messenger bowed and left.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Michael felt suddenly that he couldn't get enough air. Reality seemed for the third time that night, and the deepest, twisted and unreal. “What about your plans?” he heard himself bark, half-cunning and half-enraged. “For the princess? How will you carry them out now?”
          “I have no plans for the princess,” Verna said.
          “You were talking about Emma,” Michael couldn’t help but retort.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“Do you not understand what an example is?” Verna said.
          “That was really all you meant?” Michael said, staring into her blank brownish eyes, as if he could elicit an explanation with willpower alone. When he received no reply after several seconds, he added, “Sorry, but I really need to be alone right now.”`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `“Understandable. Entirely understandable, given the tragedy that has befallen us. I will not retire, however, having much to do and an innately ill nature that does not grieve.”
          Michael nodded roughly and left.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `He walked briskly home and got in the shower, where he let go all of all pretense of dignity and reason and stared at the wall for more than half an hour as lukewarm water poured down his back. He was too exhausted and rattled to think. Feelings had become strictly physical sensations, a tension in the muscles, a knot in the gut, an ache in the head; his mind refused to participate in them beyond a sense of frantic and useless urgency that, instead of making him more alert, made it impossible to hold a coherent thought. His ideas broke off in the middle or turned into nonsense.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Finally, with a great effort of will, he shut off the water, pulled on a bathrobe, and toppled into bed. Something like dream overcame him instantly, but his mind ran on regardless, churning over the past few days. He woke several hours later with the obvious truth in his head: either he was paranoid, badly so, or Verna had killed Emma and he hadn't saved her.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Michael sat up in bed and rubbed his eyes. His body screamed for sleep regardless of what Verna had or hadn't done. His mind was torn among exhaustion, grief, and a sliver of hope. He wanted to slump back into bed, into sleep and despair, and live out the rest of his life in a sense of loss that was pulling, black yet addictive, already: most people would call that the sane option, but as he replayed his conversations with Verna in his head, thought over her behavior, he was not convinced.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `If Verna really had killed Emma, she had possibly — probably — also collected her “essence,” whatever that turned out to be. If so, he could still help Emma, if he could get a clearer idea of Verna's plans. `,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Michael had never broken into a building in his life, and although he suspected he approved of crime in the service of social change, he had intended to clarify his ideas on the topic for some years before putting them into practice. But he didn't think he was going to get the information out of Verna with flattery. The most promising course of action (and it was not promising) was to break into Verna's workshop or her mansion and look for incriminating materials or a journal.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `He checked the news for anything about Emma. There were not even headlines yet. Instead he found himself reading about some extreme sportsman named Jared Bloom, who’d “accidentally” gone Outland, in a wilderness area where the Wall was crumbled and unguarded. He’d been arrested and isolated for decontamination on his return, of course, but he’d gone noisily to court, riled up protesters, and escaped from prison at one in the morning with the aid of some guards, who had taken as payment not only a hefty sum from his bank account but a pint of his as-yet unpurged blood.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Michael forced his mind away from the text and called Verna on the pretext of setting up a lesson (he set it for 7:00 the following evening). He verified that she was working hard and would be until well into the evening.
          By this time it was almost 9:00 a.m. An internet search told him he wouldn’t be able to pick a lock without having done it before, so he dug through his closet until he turned up an old baseball bat he could use to take out a window.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `But—what to do about the neighbors?
          Real magic was not like its popular image. Michael had never sacrificed a goat or summoned a demon. Instead, Verna had him memorize lists of the meanings of flowers or letters or phases of the moon and then hundreds of rules about what elements of the system could be combined in what ways. All of this she called the “sub-logical network of associations” underlying reality.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `The secret was that, once you knew it all, you had to do small things wrong. The magic went where the symbols told it to, but it came in through the mistakes. Choosing what to do wrong involved both mathematical calculations and disobeying your instincts. `,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Michael still had to check every step of his magic with Verna to get a reliable result. The dependence chafed. Magic was the only legitimate branch of learning he had ever found so opaque, and its difficulty attracted him, but because of it Michael was almost as doubtful about concealing himself with magic as he was about picking locks. He saw no other options, though.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `For the next forty-five minutes he improvised, burning small portions of herbs with the cigarette lighter he kept for the purpose, scribbling symbols on sheets of paper and wrapping them around rocks he used to pound clods of mud, until he produced a bag of soil and ash that he would scatter in a circle around him. Ideally, it would make him and any sound he made almost impossible to notice for a few hours (three and four-sevenths hours, to be exact).`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
      {
          text: `Finally, to hide his fingerprints, he grabbed a pair of winter gloves. Verna might have burglar alarms, but he didn’t have time to learn to foil those, and, besides, the magic would (if it were effective) deflect their attention just as it deflected human attention. If he got caught (which seemed likely, but the risk was worth it), he would explain his suspicions honestly and take the consequences.`,
          leftImage: MICHAEL_IMAGES.netLeft,
          rightImage: MICHAEL_IMAGES.netRight,
      },
  ], [
      {
          title: `Fire and Ice`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Verna lived in a fine old neighborhood. Michael had visited her house only a few times, to attend some of her weekly soirees, where she’d behaved as fearlessly as she had bizarrely. He hated them. He had changed a lot since his childhood, but parties still made him feel equal parts anxious, bored, and stupid.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He parked a block away from her house and set out across the cobblestones at a walk, gloves and dirt in his jeans pockets, baseball bat in his hand. The sun shone and the air was too warm. A golden retriever barked as he passed, but otherwise no one seemed to notice him. The still brilliance unnerved him; his body wanted it to be night, so he could sleep.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Verna's house stretched, like the others, to three stories, a rich burgundy adorned with ornate architectural detail. He stopped in front of it and sprinkled the enchanted dirt in a circle around him. He imagined, though he was nowhere near as sensitive as Verna, that he felt the disorientation that meant the magic was taking effect.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He slipped on his gloves and circled the house looking for a likely window. He chose a bay window large enough he thought he could crawl in without cutting himself, took a few deep breaths, took hold of his baseball bat with both hands, and swung.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Either his spell had worked or no one was home — or, possibly, they were calling the police at that very moment. At any rate, Michael had broken many of the strips of wood separating the window panes and made a large hole in the glass. He used the bat to clear out broken wood and glass, climbed onto the window sill, and ducked gingerly through the hole into Verna's parlor.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He deemed the parlor of little use. Verna used it for the soirees and wouldn’t keep anything interesting there. He glanced into and equally chose to ignore the ballroom and the dining room, and — for now — the locked servants' quarters. Verna kept no servants, hired a lady to clean now and then. She said they distracted her, but Michael liked to suppose she didn't have the money. (Michael's father had held his seat in the Assembly for more than a decade, and he'd never had hired help.)`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Michael climbed the stairs and zeroed in on a cluttered study, where the problem was not too little information but too much. In addition to newspapers, documents, and books stuffing shelves and boxes, two piles of notebooks teetered on Verna’s large, battered maple desk.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `The books distracted him: there were old books, new books, books on science, books on history, books on political theory and philosophy, academic books on magic and — to his surprise — popular books on magic, which she had always said were fraudulent. He made a mental note to ask her about that — she kept promising they'd get into theory, but the lessons never materialized — and then recalled that, if his suspicions were correct, she would be executed and he'd never have a chance.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He liked Verna — not many people did, but he did — and, likable or not, she was a national treasure. No one in the Kingdom’s recorded history could do the things she did. Could she be trusted? Probably not, but he didn’t want to turn her in. He would say he was after magical secrets. He might even manage to make it convincing—he'd been tempted to snoop more than once when she refused to explain this or that, claiming she didn't know how to talk about it or he wasn't ready to know.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He picked up a spiral-bound notebook written in a combination of magical symbols, maybe half of which he knew, and unfamiliar shorthand. Flipping through the rest revealed the same. He cursed. He could decipher these, but it would take time and effort. The thought of the challenge and the rewards made him itch to start. He'd steal them. If he got caught, that would make his story more convincing. But not now.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He picked a promising century-old magic text and flipped through it. The margins were covered in the same mix of magical sigils and shorthand. Another book — and another — revealed the same. He could hardly steal an entire library, but the secret was probably scattered throughout it all. He would take just the notebooks, but he wanted to glance through the rest of the house first.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Verna’s bedroom — dusty, draped in crimson, a bouquet of dead flowers on the vanity — contained nothing of use. Two guest suites exited off the staircase, both piled high with cardboard boxes that might contain any number of critical objects he would not recognize. There were jerry-rigged magical devices, jars of powders and liquids, including one that seemed to contain blood, dark red at the bottom and clear yellowish at the top. Michael cast around for anything truly extraordinary, returned to the first story, and descended into the basement. Here he found more storage, just as haphazard and peculiar as the upstairs. `,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He almost missed the trapdoor in the dusty wine cellar. 
          Though the wine bottles and the floor under the wine racks were covered in grayish dust, the area of the wooden trapdoor was clear, and magical symbols were burned into the concrete. He hit the lock several times with the baseball bat, found a screwdriver in a neighboring storeroom, and tried prying it up. In the end, a combination of the two and sheer determination let him rip it open.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He took a ladder down a concrete chute into a cave, still of concrete, much larger than he expected. Halfway across it, a wall of…something…stretched from floor to ceiling, radiating gold and orange light. 
          Michael took it for glass — until he realized that it was irregular and milky in the shifting light. It looked more like ice. He reached out to touch it, but his hand refused to come near the surface. A twisted black shadow near the far wall resolved itself, as Michael approached, into a woman’s figure.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Black hair spread out like flames around a clear, lovely face, whose eyes stared straight into his. The woman’s torso twisted to face outward. Her legs were frozen in a wild leap. She wore a gray dress that the ice had caught mid-swirl.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `The position had to be painful, but there was no pain in the woman's expression. The longer Michael looked, the more he wanted to understand that expression. Was it concentration? It seemed too intense. Rage? Too calm. For a moment, he thought it must be hatred, bone-deep hatred. But there was a serenity in the face that didn’t seem compatible with hatred. Michael had used to think, almost but not quite mockingly, of Emma's “ethereal” quality, of some elevated beyond-ness about her, but this woman’s stare made Emma seem vague, partial, merely human.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `The woman should not have looked so beautiful. Michael doubted human skin could survive in such a state in ice without magic.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Perhaps Verna had trapped her for a good reason. Perhaps she was a dangerous magician herself, or some Outlandish creature — Michael wouldn’t put it past Verna to catch such a thing. But Michael thought it likelier that the woman had something to do with Verna's plans. Maybe she would know, or maybe the key to them lay on the other side of the ice. Nor would he rest easy if he left her. Even if she were an Outlandish demon this entrapment would be too cruel. Not, of course, that Michael was so uneducated as to believe Outland was hell as such, inhabited by demons, whatever dangers it held...`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `The ice, if it was ice, should have melted. Clearly magic kept it in place. Still, he tried swinging at it with his bat. But however hard he concentrated, and he tried several times, his mind went blank as he swung, and he hit the floor or, once, his foot.
          He checked his phone. It was almost three o'clock. Who knew how long his investigations would take?`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He climbed the ladder, propped open the trapdoor, and went to the study. No police. He picked up Verna's notebooks and, on further thought, grabbed dried bundles of mint, rosemary, and sage (herbs commonly used in magic), some paper, and a pen.
          Once he had deposited the objects (it took several trips), he shut the trapdoor but tore a blank sheet from a notebook, folded it into a strip, and placed the strip so as to keep what was left of the lock from clicking into place.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Michael didn’t know where to start, so he tried a spell for melting, one Verna had walked him through twice before (each time the steps had to be different, because the time and place were different). He cast the spell on a bit of the dirt he had used to conceal himself, and it took an hour of scribbling and burning to create something he thought might reasonably work, but when he sprinkled the dirt on the surface, it merely fell to the ground about an inch away.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `“I'm a complete idiot,” Michael told the woman in the ice. “I'm so sorry. Now what?”
          She stared at him, cool and urgent and completely unhelpful.
          So Michael opened the first journal.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `A few minutes in, hope took root. Verna's handwriting was difficult, and so was her shorthand, but often he could at least tell what she was writing about. This let him skim through several volumes in thirty minutes, marking passages that seemed relevant. Much of the journals dealt with theory, and he itched to read them properly. Others dealt with specific types of magic and her experiments with them. Anything to do with glass, ice, imprisonment, and walls he marked.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `The important passage, though, he almost ignored. He had no plan to mark it, but the top of the page read, “On the Water of Life and the Water of Death.” This reminded him of Emma, who had once told him an Evernost tale in which a prince was hacked to pieces and then resurrected with both Waters (Emma’s interest in everything Evernostian seemed her sole form of rebellion against royal expectations). The passage beneath it read, as best as he could piece it together from the shorthand,`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Evernost, whatever else may be said of it, is the place of life. On Carruthers' dualistic view — though I despise all dualism and he shows the muddle-headed dogmatism of all but the greatest theorists of magic; why does the field attract so few real intellects compared to other forms of philosophy and science (for I refuse to draw distinctions among the three)? — all existence is fundamentally a mixture of being and nonbeing, which he somehow equates with life and death, intellect and absence thereof, and, as if the world were a giant computer, the numbers one and zero (he claims that all number and complexity spring from the juxtaposition of being and its absence).`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Despite the manifold limitations of such a theory, it provides a helpful lens for the purpose of creating enchantments relating to death. It was also key in showing me the nature of the Kingdom itself. The idea of nonbeing as an integral and defining trait of the Kingdom, and even one that provides complexity and variety and, under the correct circumstances, a deeper and more real being, allowed me to isolate a substance that exemplifies, in some senses, the Kingdom itself, as defined against Evernost.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `In its purest form, this substance does in fact behave much like pure absence, to the limited extent such a thing is conceivable. It is not a vacuum that draws all into it, for vacuum implies space. Rather, it is inimical to all substances and maintains its freedom from them. Complex enchantments are required to touch it or even come near it. It has no color, sound, smell, taste, and it is difficult to assign any qualitative description to it, though it is, perhaps, grayish if the mind insists on such a designation; it is clear in small quantities and obstructs vision in large.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `In this form it is an excellent protection, at least in regions far from Evernost, as the only thing I have found that can penetrate it is a sort of opposite essence that can be abstracted from Evernost's differences — practically speaking, any object that has been in Evernost long enough to be “contaminated” by the scientists' standards (their tests for said contamination remain, of course, shamefully indirect and their own incomprehension of the results' meaning is laughable; they believe the place is poisonous).`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: ` It can also aid in the creation and maintenance of spatial discontinuities — why I have not yet determined. In its more dilute forms, my “nothingness” has many uses — including as a poison whose very nature, whose ruling idea, if such a thing can be defined, is poison.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Verna's description of nothingness matched the field around the wall of glass or ice. If this was more than coincidence, all he needed was something with Outlandish contamination.
          All. Like he was going to find that before Verna got back.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He could think of a vendor Verna had used for magical supplies, a man who was more or less a charlatan. He had claimed — as many such charlatans did — that he had Outlandish dirt, which supposedly enhanced male potency. Such people claimed all sorts of benefits for Outlandish artifacts, ranging from the mild (relief from aches and pains) to the highly improbable (perfect love and immortality). The chances that the dirt had been anywhere near Outland, let alone that it had not been sold already, were low.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He did not understand afterward how he had made the connection; it was the magic of desperation, and it seemed like real magic afterward that his guess turned out to be accurate. But he remembered the jar of blood in the storeroom, and he remembered reading about Jared Bloom and the missing pint of his blood.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `There were all sorts of uses Michael could imagine for blood in magic. Anything, so long as there were folk beliefs and associations about it, might strengthen a spell, properly used. But Verna, Michael knew, poured scorn on magic that depended on the death and pain of other beings. Why would she have a jar of blood—and a pint jar at that — if there weren’t something special about it?`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Hope tearing a hole in his gut, Michael sprang up the ladder and then the stairs.
          He found the jar after five minutes' search. When he returned to the underground cavity, he shook it up, gingerly dipped a sheet of paper in it, and began to flick it at the wall imprisoning the woman.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He expected no result, and at first he did not notice that cold now radiated from the wall. But when he reached to touch the area he had sprinkled, he found it not untouchable but so cold it burned.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `A grin bursting onto his face, he dribbled blood over the whole surface of the ice where the woman was frozen. Occasionally the ice flickered out and was replaced, captive and all, with a concrete wall. This did not happen often, but it frightened Michael. All the more reason to work quickly.
          Soon the whole area of ice in which the woman was imprisoned was accessible. Michael thought of his melting spell and tried his ensorcelled dirt.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `At once, beads of water appeared on the surface of the ice. The ice disappeared twice before the woman's face was clear and twice more before he pulled her free entirely. The light beyond, he realized, was fire. He could see it through the remaining glass-thin layer of ice. Fire and ice. Once Emma had recited an Evernost poem about fire and ice and the end of the world. Something like horror rose in him. But he did not have time for horror. Free, the woman slumped in his arms. He held her gingerly, afraid she was dead.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `But no. Though her eyes had closed, she had a pulse and was breathing lightly. He lay her next to the notebooks. He was not going to be able to carry them, the bat, and the woman at the same time, so he regretfully left everything but her as far as he could from the walls of ice and fire (now flickering out of existence at least once a second) and concentrated on the near-impossible task of getting her up the ladder; he finally made a sort of sling out of a green and pink paisley blanket from one of the storerooms.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `The first thing to do, he decided as he carried her, back aching, through Verna's house, and out the front door, was get her medical help. 
          Michael nearly loaded her into his car and drove away. Glee filled him—for now, he’d pulled it off. He’d always longed for adventure but felt, increasingly, the older he got, a giant wall of respectability growing between it and him. But now… Then, in a horrible instant, he realized he’d learned nothing about Emma. In fact, he’d all but forgotten her.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Could he get in without the concealment spell, which had expired, his phone confirmed, ten minutes ago? Dread dragged at him, but he had to try. He started his car, turned on the air conditioning, and lay the woman gently in the backseat. His sense of triumph altogether gone, along with the curiosity and excitement that had sustained him so far, he walked back into Verna’s house, this time through the front door, and back to the trapdoor. The concrete chamber showed no sign it had ever contained fire and ice. He shook as he carried the stack of journals up the ladder. He rested for a moment at the top, then left the house, this time remembering to lock the door behind him.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `He wanted to throw up. He wanted to sleep. At the least, he wanted to run the short distance to his car. Instead, he walked at a leisurely pace, checked on the woman, and drove away, expecting to hear sirens.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `But no. A shadow of his previous giddiness reappeared, though it ran parallel to sick exhaustion. Here he was, risking years in prison to save a woman he loved and would probably never be loved by in return. He hadn’t thought of himself as brave or self-sacrificing before, though when he was younger, he had dreamed himself the hero of a story almost as much as Emma had (unlike him, though, she’d made half her identity out of it).`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Now he had a different unconscious beauty on his hands. This woman in her entirety was gloriously unbelievable. There was nothing even remotely rational about her or the place he’d rescued her from. She made his view of Verna richer — he feared Verna in a way he had not, took her seriously in a way he had not realized he had not, and even — for all the cruelty it took to imprison someone that way — admired her in a way he had not.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Lost in thought, he missed the turning for the hospital. He began to mutter aloud, feeling foolish, and another thought struck him. What if the woman wasn’t unconscious? What if she was just — what was the word — a  simulacrum? A false copy of a human with no mind or memories or anything? A body incapable of anything, or incapable of anything until animated by the right kind of soul?
          What would medical science make of that? What kind of blood would such a creation have? Would it dissolve under examination?`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Or what if the woman was Outlandish?
          His sense of his own courage collapsed: against his will, he drove toward his apartment instead of the hospital.
          Sick inside, he carried her in, looking furtively around, concocting wild stories in his head about rescuing drowning women. No one seemed to notice him.
          “Spell might work longer than I thought,” he muttered as he carried her up the stairs (unlike the spell, perhaps, the elevator had stopped working months ago).`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `“God, you’re beautiful,” he added as he lay her on the dirty brown carpet. He shifted textbooks of magic and physics and computer science, as well as two days’ dishes, off his futon to make room for her. “Someone should paint you. Pity I’m no artist.” He impulsively took out his phone and snapped a shot. She was like a painting already, with her limbs helplessly helter-skelter, her tangled black hair, and the pensive blankness of her face.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `The kind of dark, quietly erotic pseudo-medieval painting Emma would have giggled at but secretly done copies of in her sketchbook. Emma wasn’t a brilliant artist, but she could do unembarrassing watercolors — even of people — which was twenty times more than Michael could say for himself.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Michael lifted the woman onto the couch, arranged her into what he hoped would be a more comfortable position, and covered her in blankets even though his apartment was stuffy (no air conditioning). Supplying gentle warmth, a quick search on his phone suggested, was the first step in cases of hypothermia. 
          He didn’t want to deal with hospital personnel. He didn’t want to deal with explaining what she was, if she turned out not to be human. He wanted to go back to bed. But it would be abominably stupid and horrible to rescue this woman from the ice only to have her die. It would be murder.`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
      {
          text: `Exhaustion and near-panic tethered him to the kitchen. He filled up his battered red teapot, turned on the heat, and paced, trying to work up his nerve. He only noticed the teapot’s weak whistle when the water boiled over. Why had he put the kettle on in the first place? He didn’t even want tea. Whatever. He twisted off the lid on an unopened tin of chamomile tea Emma had given him as a birthday present, rustled up a tea ball, and poured a cup, and went into the living room. Perhaps looking at his sleeping beauty would give him the courage to take her to the hospital...`,
          leftImage: MICHAEL_IMAGES.bloodLeft,
          rightImage: MICHAEL_IMAGES.bloodRight,
      },
  ], [
      {
          title: 'Sleeping Beauty',
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `Sleeping beauty, I said — but when Michael returned from the kitchen, the woman was not asleep. She was sitting up, looking around expressionlessly. Michael dropped the teacup. Hot water splashed on his hand, then soaked into the carpet. “Oh!” he said. “Argh, I’m sorry! I —”
          The tiniest of smiles on her face, the woman watched as he grabbed paper towels from the kitchen to sop up the mess and ran cold water over his finger. 
          “What’s your name?” she asked. Her voice was bell-like, with a hint of laughter to match the hint of a smile.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `She was too real, so real that everything, the past few hours, his whole life, seemed doubtful. “Michael?” he said. “And you — what’s your — are you okay? Can I get you anything?” 
          “I am called Madeline, and I’m well, thanks to you. You saved me.” Subtle amusement had turned to intoxicating seriousness.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“I thought I saw you in a wall of ice,” he said cautiously. “It disappeared off and on. I know that doesn’t make sense,” he added. “I’m not at all sure that’s what really happened. It feels — fake. Impossible. Now, you know.”
          Silence. A series of unreadable expressions crossed Madeline’s face. “Oh, it happened,” said Madeline at last, smiling again, but with crabbed bitterness in her voice. 
          He could not resist replying, “Where do you come from? What was Verna doing with you? Do you know? Or — should I not ask? I’m sorry, I don’t want to bring back memories...”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“I — I would prefer not to talk about it,” Madeline said. “Verna is my mother,” she added darkly, after a moment’s pause.
          “Your mother,” Michael repeated.
          “Indeed,” said Madeline, with half a nod and a quick quirk of one corner of her mouth.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“Oh,” Michael said, reality rearranging itself in his head. He didn’t know what else to say, and she wasn’t helping him. He thought irrelevantly that she still looked like a painting, and also like she didn’t in any way belong in his dump of an apartment. He began tidying in rough jerks of motion. “Is there anything I can get for you?” he asked stiffly. “I have pop and some leftover pizza... We could go out for dinner! There’s a good chicken place just a couple of blocks away... I mean, what do you like?”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“Whatever you would like. It’s been a long time. But yes, I’d like to eat. I’m ravenous.” She laughed a small self-deprecating laugh. She made it graceful, Michael thought — just like Emma would. No, more so. Though of course, he thought, it was probably sexism making him draw the distinction — some buried feeling that women weren’t supposed to have physical needs at all... Frost flaked off as she stood. The futon was damp. 
          “Give me a second to get ready. I have just the idea,” Michael said. He left and emerged in a stiff gray suit to match her dress.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `He made a decent amount as a freelance programmer, enough to support himself as he studied with Verna, but usually he wouldn’t spring for a dinner at Cascade. This, though, might be his last day as a free man, and Madeline deserved the best.
          He felt uncomfortable, for a moment, thinking of Emma, but then, with one great laugh, freed himself from that. Emma wasn’t interested. She never had been. It was, frankly, kinder to her to love someone else.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `It just had never really occurred to him to like anyone else — most of the eligible women he knew were — idiots? Or at least bored by everything that interested him and mostly inclined to scorn him anyway. He was too poor, too nerdy, and, if he were fair, too uninterested in their interests — which, if he were unfair, appeared to be primarily fashion and stylish TV dramas and the details of the last drunken party. Even the ones who broke that mold were just too different — some of them so sophisticated he felt like a clumsy clod by comparison...`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `(Emma, who was only a bit sophisticated — and, as she sometimes said, sophisticated with a sophistication that would have made more sense a century ago — felt exactly the way he did about the other court girls and women, except that she was less inclined to try to be fair — that was one thing that drew them together.)`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `Now, as he led Madeline back out to his car, he wondered if more of the problem hadn’t been that none of the women had been interested in him. Because he knew precisely nothing about Madeline (his imagination was already concocting any number of picturesque life stories for her), but he still couldn’t keep his eyes or mind off her, wondering at her proud and graceful walk. As he opened the car door for her, she delicately touched his hand. Was it all just that she seemed to like him?`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `There was something accessible about her that there was not about most women, and yet she had the supreme confidence he’d admired from afar in pop stars...— shut up, he told his mind fruitlessly. He glanced at her and saw her looking up into the sky, an expression on her face that he barely identified as frantic hunger. She was staring straight into the sun.
          In the car, she said, “Light is marvelous. I love the light on the brick of the buildings and the trees...”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“Eh, it’s not much,” he said uncomfortably, noting, however, that she seemed to have Emma’s sensitivity to beauty as well as her friendliness.
          “Everything is beautiful,” she said, “when it’s new. I don’t know when I last saw the sun.”
          Michael almost asked more questions — she almost seemed to want him to — but, remembering her earlier reticence, he merely grunted uncomfortable assent.
          In the dim reddish lighting of the restaurant, she frowned at the menu. “I’ve never done this before. How do you choose?”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `Michael tried to explain about menus and waiters. He wound up ordering prime ribs for both of them with extravagant choices of wine (some distant memory sprang to life from a class he’d taken on wine pairings at his father’s insistence).
          Madeline spoke little. “Tell me how you rescued me,” she said at last.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `Madeline spoke little. “Tell me how you rescued me,” she said at last.
          “I’m going to be arrested,” he said with a wild bark of a laugh. At once, he cursed himself for even letting her know that. He didn’t want her to feel responsible. He babbled a little about the coercive system of law and finally said, “Do you know anything about magic? Or the government?”
          “Very little,” Madeline said. “Please tell me.”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `First he talked haphazardly about the Kingdom. “Pretty much everything is wrong with it. People keep trying fix the injustice, but no one has ever gone far enough. I don’t think anything other than a revolution will be adequate. For a long time there were just kings — do you know what that is?”
          “Very little,” she repeated.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `It occurred to him that perhaps Madeline was like a simulacrum—or at least like the blank slate of the philosophers. His was the duty of shaping her, teaching her. He must be something, in some sense, like a parent to her as well as a rescuer. He was her gate to the world. It was a powerful feeling, and a highly suspicious one, so he tried to shove it aside. I’ll introduce her to people, he thought—and then, but how to explain her? We’ll come up with something.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“It’s someone who rules the country,” he began, pathetically. He then launched into the best explanation he could muster of the political system, which proved oddly difficult. Madeline nodded along with everything he said, but it wasn’t clear to him when he was stating the obvious, treating her like a child, or, on the other hand, going over her head. He suspected he was alternating awkwardly between the two, and her responses told him nothing — though she smiled occasionally at his efforts at wit.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `Then, feeling embarrassed, he began to explain the actual situation. He felt oddly awkward about bringing up Emma, so he glossed over her story, calling her first an acquaintance, and, when that felt dishonest, a friend, but not discussing anything else (and really, there wasn’t anything to discuss).
          He explained Verna’s last words and then Emma’s disappearance and rediscovery, dead. He explained his hope that she was not dead, that her “essence” remained. He explained that he had broken into Verna’s house and found Madeline and that he was almost certain to be arrested.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“Ah,” said Madeline. She squeezed her eyes shut for a moment. “That shouldn’t be a problem now.”
          “What do you mean?” he said.
          “I fixed her house.”
          “What? You weren’t even awake —”
          “Magic,” said Madeline with her widest smile yet (still subtle). “I thought you and Mother were magicians.”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“You can do that — with a thought?” Michael asked. “For us — I mean, unless Verna’s hiding something from me, which I guess wouldn’t be that surprising — it takes all sorts of calculations and stuff.”
          “I’m different,” Madeline said, a bit plaintively. “It’s as much a curse as a gift.”
          “There’s — what’s the curse? I mean, if you don’t mind my asking?”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“Well,” Madeline said, “It’s why Mother trapped me in the ice. She was afraid of my power. Afraid I would grow stronger than she was. I don’t know much, but I know this about the world — many people will feel that way about me. I will be either a threat — or a tool. I know you’re different. You won’t treat me like that. You see my humanity.” As Michael looked around, belatedly worrying that they might be overheard, she added, “No one will make anything of our conversation. I already did that. I could feel you had secrets to impart.”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“Oh.” Yet again, disorientation. “I — I’ll do my best. I don’t think I’ll hurt you in any way.” 
          “We must hide my powers,” she said. “I want to live a normal life. You won’t tell anyone?”
          “No,” he said. “I promise. Are you sure, though? I mean, that you fixed her house? That’s a lot to do at once — could we check?”
          “That’s nothing. Still, why not? Drive past on the way home.”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“Oh,” said Michael. The room seemed almost to shake. No, Madeline was not a painting. She was pre-Dorian, a statue, round but sharp-edged and still, with a stillness that made every movement meaningful. 
          He had meant to drink only a sip or two of his wine, as he had at Father’s dinner parties when he was a boy. He was shocked to discover that he had drunk an inch from his glass and shoved it away from him, toward the darkening window, spilling a bit on the tablecloth.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `He had also meant to ask Madeline about herself, delicately, but this did not happen. Though Michael knew he talked too much, knew he could be self-centered, he couldn’t escape believing that, right now, she was the one steering everything back to his childhood, his beliefs, his hopes, his dreams. How could she care? At last, in the middle of a story about a high school math contest, he’d had it.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“Think about what your power could do,” he said, more loudly, looking her hard in the eye. “How much good. You could — can you make food? Because if you could we’d never have hunger again. You’d be able to — oh, I don’t know, build buildings with a thought. You’d put us all out of work, with just a little effort — but it would be good — because that’s just the impetus we need to finally — you’d be incredibly highly honored, you’d be a hero. Do you think that other people could exist with your powers? If you had children, maybe?”
          “That would be slavery,” she said.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“No, no, they’d love you — I suppose?” he said. “I mean, you’d have to live your own life too, you couldn’t do everything for everyone all the time — we’d have to work out the most efficient ways of using your magic, where you’d favor conventional means and where magic would make things so much better — also, you’d be working just the same amount as everyone else, in a perfect world — only so much more productively because your talents are unbelievable.”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `He went on, “But that’s one of the things I’ve thought with magic, it’s just so incredibly exciting to think about. It’ll tear down the existing social structure, and we can rebuild something exponentially better for everyone. Of course, you’d have my help too, my kind of magic. Because — I think it’s a subject we should study in school. It can be learned — it’s difficult, but it can be learned — I’m sorry. I know — know it’s none of my business really, what you do with your power. I’m just thinking. I can’t help but think at least, you know.”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: ` “Oh, I’ve had such thoughts too,” Madeline said lightly, her fractional smile back on her face. “Don’t get me wrong. But it has to be on my terms.”
          From there, he veered off into the rest of his utopian dreams — the wine was beginning to take effect. He tingled as she led him from the restaurant, after he paid (he panicked at the bill, now that he wasn’t definitely going to be arrested). He could tell he was driving erratically, but he still went by Verna’s house . The window he’d bashed in was intact.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“What about the blood and my baseball bat in the basement?” he asked Madeline. “She’ll wonder.”
          “No,” said Madeline. “The blood is back in the storeroom. The bat is in your apartment. And she won’t miss the journals.”
          “You can do that? How could she not miss them?”
          “Trust me,” she said.
          “Thank you,” he replied, his voice rising with nerves.`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `At home, she shook her head as he offered to clean up further, though she suffered him to pull out sheets for the futon. He showed her the bathroom. At last, they sat down on the floor with the journals. “Show me what you were using them for,” Madeline said.
          So he opened to the page dealing with the essence of nothingness and explained his insight about the blood. “I don’t know how I thought of it,” he said. “It just came to me in a flash — I still don’t even know if that’s what did it.” 
          “I love you for it,” Madeline declared, putting her hand on his shoulder. “You’re brilliant, Michael...”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `He stumblingly demurred.
          “I have a difficult question to ask,” Madeline said.
          “Yes?” Michael said, something fluttering in his chest as if about to take flight.
          “I think you are wonderful — brave and kind and honest and clever.”
          “Thanks, I guess...”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `“I want — oh, a thousand different things. Always, I want more. But I would love it if you gave me a kiss. Would you do that for me, Michael? You don’t have to love me. I know you love the princess —”
          “But she doesn’t love me!” Michael said. Had his feelings been that obvious? “I’d love to —”
          “She is a fool,” Madeline declared, seized his face, and pulled him to her. “You are so brave. You’re a true hero.”`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
      {
          text: `The feel of her lips on his lips thrilled him in a way only his imagination had before. She bit his lip. She pulled him to her, the expression on her face very much like the one with which she had stared into the sun. Hunger — frenzied, ravenous, dangerous hunger. He gasped at her cool hands under his shirt —`,
          leftImage: MICHAEL_IMAGES.wineLeft,
          rightImage: MICHAEL_IMAGES.wineRight,
      },
  ], [
      {
          title: 'For the Best',
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `By sunset, a bit after nine, Michael and Madeline had been rolling together on the futon, groaning and shrieking, for more than an hour. Michael did not believe a bit of it. It felt unusually real — he felt twenty times as alive as he ever had — but it was so implausible. He realized at some point that he should have gone out for condoms, but when he muttered something about it, Madeline only laughed, a long, real laugh.
          “What’s so funny?”
          “You,” she said.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `They fell asleep sometime around one in the morning, exhausted. Right before, Michael gazed at Madeline in awe. “I’d be embarrassed to have imagined any of this happening,” Michael admitted. 
          “Why?” said Madeline. 
          “I’m just —”
          “Just what?”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“Not the sort of person who does any of that,” Michael finally muttered. “I mean,” he said, feeling bold, especially as Madeline had listened to everything else he’d said and still didn’t despise him. “I’m the sort of person who’s supposed to fantasize about that sort of thing — and I guess does, I mean, did, and it never happens, and everyone laughs —”
          “There is nothing laughable in you,” Madeline said. “You deserve it. So do I. Never before have I done any such thing, and I am pleased to discover that I can. It is exactly what needed to happen.”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“Can you ever,” Michael murmured admiringly, and stumbled, because that didn’t seem like the sort of romantic thing you were supposed to say. He almost said then he love her, but he stumbled. Madeline seemed a stranger. 
          Madeline supplied the romance. “I think I love you,” she said.
          “You’re beautiful,” he said unhelpfully. Now he felt responsibility weighing more heavily on him yet, for Madeline’s heart as well as her understanding of the world. 
          “Sleep,” she said, and he did.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `He dreamed powerful dreams. He dreamed of Madeline staring into the sun, and something else about the sun. When he awoke too late the next morning, remembering that he had a lot of work to do, he showered in a daze, grimacing at the sun outside his window — too bright, too much, it would give him skin cancer. He did not wake Madeline, who lay wrapped naked in a blanket like the flowing wrap on the faux-medieval painting he’d thought she was the night before — unearthly even though the blanket was pin-striped and food-stained. Instead he got on his computer and started trying to catch up on renovating a decade-old website for a health food company.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `He’d worked for about two hours when Madeline stood naked over him. “You must explain computers. They are more magical than I am.”
          So Michael, uncertain and half-inclined to laugh, began to describe their history and uses and how to work with them.
          When he finished, she abruptly stood, collected her clothing, and went to the bathroom to shower. “I don’t believe in you!” he called whimsically after her.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `When she emerged, wet hair twisted up into a bun, she asked to shop for clothes.
          She returned from the women’s store he’d located on his phone with tank tops and black jeans, each piece more expensive than Michael’s entire wardrobe, but he had not had the heart to take her to the secondhand store he usually used. She smiled and thanked him with a delicious kiss. 
          He had to work after that, he protested — really. Privately, he thought he’d have to take on an extra project just to pay for Madeline’s wardrobe, and he hadn’t finished his work that morning.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“I’ll explore, if you don’t mind,” Madeline said, and he found that he did mind — a little. He gave her his phone out of worry and showed her how to call the apartment building if she needed anything. It was also, though, he admitted to himself, that some part of him liked the idea that she was his — a private experience. There was something violating even about the idea of others’ seeing her — and what if she found someone she loved more, the back of his brain wondered. He was, after all, if he understood her story, the first man she’d ever seen. Well, then, she does, he thought in frustration. At least he wasn’t, you know, saying all of that.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“We’ll have to get you one, I suppose,” he added, his heart sinking at the thought of the expense — and then taking flight again at the thought of her. He’d take on extra jobs — he’d make it work somehow.
          That was silly. Why wasn’t he thinking of her getting a job? It was hard to imagine — it was the problem with her going out squared. Madeline’s serving coffee or selling shoes? Maybe an office job? She would probably have very few skills. Maybe he could teach her to program, and they’d work together. Warming to that thought, he sat down to work.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `Madeline returned with a glow of life that boded ill for her being his mystical private experience but quite well for her adjustment to life in the city. He could take some pride, or at least pleasure, in that.
          “How was your day? Find anything interesting?” he asked.
         “Oh, everything is interesting!” she said. “Colors are so bright, the world is so beautiful and strange. I used to watch pictures of the outside in a magic mirror, but everything was blurred and faded. Tell me what you’re working on.”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“What I’m — oh, nothing,” he said. “At least, nothing interesting. Security for a goddamn health food store. You know, it struck me — would you like to try to learn to code? You’ll need some kind of job...”
          “Why?” she asked. A frown passed over her face.
          “Because you need to eat and — and —” It didn’t seem polite to suggest she help with the rent. Truthfully, he finished, “I can’t afford to support you totally. I just don’t have the money, and even if I took on a lot more work, I don’t think I could afford it, on top of studying magic.”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“Look in your cupboards,” she said. He stood and glanced in the first. It had noodles and noodles and noodles — months’ supply of the noodles he usually subsisted on, in different flavors. The fruit basket on his table — long empty — was full of fruit. He found several bottles of milk and a few cheeses in the fridge.
          “Oh,” Michael said. “I — can you do that? Often enough to survive, I mean?”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“Look in your wallet,” she said.
          He did. Hundred-dollar bills tumbled out.
          “Where did it all come from?” he asked, awed and horrified.
          “I don’t know,” she said, shaking her head. “It doesn’t matter. We have it now, don’t we? But show me this programming. I need to know more about the world — and more about computers.”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `No, Madeline would not have to work. She had more than earned her keep — for months — with what seemed like no effort. He was relieved. Still, it would be fun to teach her programming, he hoped. Would she be any good at it? Emma had found the little bit he’d shown her boring and frustrating, and she’d gotten lost as he tried to give examples of the excitement of problem-solving. She had not encouraged him to tell her more.
          He brought Madeline over and began explaining binary. She nodded along as he spoke, and he couldn’t tell if she was following or just being polite until she wrote out “I love you” in binary on a nearby napkin.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“You did that in your head?” he said. “The first time?”
          Madeline smiled and shrugged.
          He’d taught her the basics of several languages by eight that night. Her memory was excellent — much better than his — and her ability to reason through the puzzles he set her was impressive as well. He considered going back to work — but realized he would have to work a lot less now. He wouldn’t bow out of this job — he’d still take on work to keep in practice, he assured himself. He’d have more time for magic.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `Instead of working, they made love.The next day, Madeline reminded him of the journals. Both could understand the shorthand with some effort — Madeline more easily; she even seemed familiar with it. 
          Mostly, the journals held lists of associations between one thing and another — and then alternate associations — and then yet other associations. Michael had learned only a single set, and he’d thought it was vast, but here was a journal full of hundreds, with brief notes that were cryptic even to Madeline about the conditions under which any given table was to be employed.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `He had only the most provisional understanding of how you twisted the associations to do magic, but it grew as he read her equations (although sometimes they contained variables like “love felt”) and aphorisms and even, once, a poem, explaining how this was to be done. There were also pages full of speculations about other ways of doing magic than hers, and she seemed even to have succeeded with some of them. She hated, it seemed, any doctrinaire or simplistic — which, as far as Michael could tell, came out to “organized” or “definable” or “comprehensible” — system for doing anything.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `There was even a page devoted to Madeline’s magic, listed as such. Madeline tore it from Michael’s hand, scanned it, and then tore it up. “Mother was cold and cruel,” Madeline explained, “and I can’t stand to have this around.”
          “Does she understand your magic, though?” Michael asked cautiously. He badly wanted to understand Madeline’s magic.
          “Not a bit,” said Madeline.
          “Do you?”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“Only this,” she said. “If I want something enough, that thing will happen. Most people don’t know how to want things. They want scarcely anything at all.”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `The next journal Michael looked at was all about souls. Did they exist? If so, were they a substance, or (she wrote once) an extra dimension, or an abstraction? She seemed to settle on abstraction, and fancied that when she took someone’s soul (Michael gave a gasp at this, remembering what she’d said about essences and gold net) she really took an immensely complex pattern that defined everything about who they were. She was glad, she wrote, that she did not have to search out this pattern herself but could call upon the associations of the word soul and the fabric of reality would do it for her.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `At the end was a list, a very short one. It read:

          Katherine: Heart
          E. creature: Spirit
          Emma: Mind
          Madeline: Body`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“Body, eh?” Michael said with a bit of a laugh. “I — I feel awful saying this, and Emma’s sweet, and good, and kind but you have more of a mind than she does — just from watching you, I’m positive of it.”
          “I don’t like it,” Madeline says. “I don’t know what it means, but I don’t like it.”
          “Can you — wish to know — and then know?” Michael asked apologetically. “Or does your magic only work with physical objects.”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“Oh!” Madeline barked out a shocked little laugh. She frowned again. “Oh,” she said, voice rich with sarcasm. “Typical.”
          “What?”
          “What?” said Madeline dangerously. “Only that she was going to kill me and use my body for these other people.”
          “Oh!” said Michael, horrified. “That doesn’t even make sense, though,” he protested. “Why would she want to do that? Are you sure?`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“Positive,” said Madeline, even paler than usual with horror and disgust. “Excuse me.” She walked to the bathroom, and he heard her throwing up.
          “Are you all right?” he called in.
          “What do you think?” she asked, coming out. Then, more calmly, she said, “I’m honestly scared sick of what will happen if she finds me. Will you hide me, Michael?” 
          “Of course,” he said, a swelling balloon of protective warmth starting in his chest, combined with flat horror.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“I wasn’t good enough for her,” Madeline explained tightly, flipping through the rest of the journal, which Michael had already gone through painstakingly, with a quick eye.
          “How could you not be —” Michael asked.
          “Oh, you don’t know Verna,” Madeline said. “Nothing short of perfection is good enough for Verna. She wanted me to rule the country. She thought I would be the perfect ruler. Only I’m a mere mortal. So she had to choose better people, perfect people to replace me. The only thing that suited her about me was my appearance.”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `Michael felt a rush of sympathy and arousal — the thought that someone could look at Madeline, brilliant, passionate, astonishingly magical, and think that only her body was worth keeping —
          “Ruler?” Michael said. “Of the Kingdom?”
          “Where else of?” Madeline said. “Evernost?”
          Michael flinched. Not because he minded swearing but because Emma loved those stories. Hearing the word Evernost spoken with that sarcasm was painful.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“I’m sorry,” Madeline said. “I’m not a romantic like she was.”
          “You —”
          “Like Emma.”
          “No, I wasn’t...” Michael began, but he trailed off, because he had been. “What do you know about her?” Michael asked instead. “Is she still alive? Is there any hope of finding her soul? Since Verna meant to —”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `Madeline frowned again. She said, “I hate Mother. Hate her more than anyone else in the world. I don’t think anyone but me could understand how much I hate her. I don’t even understand.”
          “What —”
          “Emma,” she said, “is dead. Mother meant to capture her soul but failed. She’ll have to find a different mind for my body.”
          “Not once we’ve arrested her,” Michael said, repulsed but fascinated by the idea of Emma and Madeline combined.`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
      {
          text: `“On what evidence? I’m not revealing my powers.”
          “If we find something in the journals — we already have, really. Then I just have to admit to breaking in —”
          “Don’t be an idiot,” said Madeline. “This isn’t worth sacrificing yourself for. Trust me, we’ll get our revenge somehow.” Her expression looked momentarily exactly as it had when she’d been in the ice — and then crumpled.
          Michael put his arm around her. She kissed him. “This will all be for the best,” she said, voice trembling slightly. “We’ll make it for the best.”`,
          leftImage: MICHAEL_IMAGES.noodlesLeft,
          rightImage: MICHAEL_IMAGES.noodlesRight,
      },
  ], [
      {
          title: 'The Personal and Political',
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“Tell me,” Madeline said over breakfast the next morning. “You’re a communist. I know very little of these things.”
          “Well…” Michael began to ramble on about industrialization and inequality and finally handed her several books to look at. 
          As she picked them up, a strange grimace crossed her face. But she began to read as Michael worked. She progressed through the books at truly astonishing speed.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“You speed read?” Michael said. “I’ve always been fast, but never like that.” She’d gotten through the first four-hundred page tome he’d given her in the space of two hours.
          Madeline shrugged. “Evidently,” she said.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `When she’d finished all three and Michael had cleaned up the apartment admirably as well as finishing up with the health food store, he said shyly, “I go to meetings with some friends. They’re — I wouldn’t say more serious than I am, but they’re more practical, and more invested in it right now. Some of them are even actual members of the Communist Party. You know, that can be a tough place to be in today’s political climate....”
          “I would love to go,” Madeline said.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“Really?” said Michael. “I mean, you’re not just being polite? I don’t want to bore you.”
          “I’m not bored,” she said. “I’m angry. Reading this is really a revelation to me — you see, because I’ve thought the same things — at least, I remember thinking them before. Society is broken. Even Mother is only a tool. It’s all money and power, with her. Not that she’d ever admit it. So, yes. I would love to go.”
          That evening, feeling yet deeper in awe and sympathy, Michael brought her to a classroom in Prima University’s sociology building, where the regulars, aged 18 to 80, sat in or on the desks`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“This is Madeline,” Michael said. “She’s my friend from—from Yansick,” he said, choosing a small town at random. “She wanted to hear… Well, she’s sympathetic to our goals.”
          “Good to have ya,” said Don, a student with a bushy brown beard in army fatigues. This was seconded by subdued murmurs throughout the room.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `Madeline made polite conversation — much more successfully than Michael usually did. Michael’s favorite, Ben, wasn’t there at all, and the rest were people Michael didn’t relate to at all beyond their common interests. But Madeline listened to all of them, smiling regally and eliciting information from them that Michael hadn’t despite having known some of them for years.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `Then the meeting began. As usual, it was an informal affair once roll had been called. One of the new students was very excited about one of the books Madeline had just finished reading and felt moved to quote from it at length. Madeline remained impassive; some of the other young members moved about restlessly, but Adelaida Lawrence, the oldest member, nodded enthusiastically and said, at the end, “Thank you so much! That’s so deep! So deep!” `,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `Michael cautiously piped up with some additions he would have made to the text and critiques—they amounted to something more than the fact that he was a gradualist, he thought defensively — but was quickly cut off by Don. “Your usual shit,” he said. “We need revolution now.”
          “I’m not saying we don’t—” Michael began—hopelessly, because the others emerged to shout him down.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“What does she say?” asked Adelaida in a lull, pointing to Madeline.
          Madeline cocked her head to one side thoughtfully for a moment. Then she said, slowly, “With all due respect to Michael, we need to move soon.” She offered two brief, cutting arguments Michael had not encountered before.
          He still didn’t agree with her, he was fairly sure—and also felt slightly punctured to have her disagree with him in public, but he knew that was unjust, so he said, “Those are excellent points — really, they are — but I still think we have to consider —”`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“Consider what?” roared Greg. “That you have pudding for balls?”
          There were sympathetic rumblings from his corner of the room.
          “No,” Madeline said, and they fell silent at once. “Michael is no coward. He is wrong, but he is no coward. Don’t say such things.”
          Michael stared at her in awe and a sort of dread that he didn’t understand.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“Sorry,” piped up little redheaded Eric, who was the treasurer. “We have to talk about money before we wrap up, because the university is about to kick us out again. They’re one vote away from cutting our funding. We need to discuss strategy.”
          A much louder outraged roar began to build, but this time, too, Madeline put an end to it. “You have funding,” she said in a moment’s lull.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“What do you mean, we have funding?” Eric said. 
          “You have funding,” Madeline repeated, pulling a checkbook out of her new black leather purse. “The only question is how much.”
          “Which depends on...” Eric said uneasily.
          “How much you need,” Madeline said, looking him straight in the eye. He looked overawed — in fact, very much the way Michael felt around her all the time. He suppressed a moment’s jealousy.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `Eric muttered something about a thousand dollars annually. The check, when she handed it to him, was for ten thousand. Michael looked urgently at her, trying to communicate that magical forgery wouldn’t make a check not bounce, but she quelled him with a stare.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“What in the?” Michael asked as they walked home. “Madeline, you don’t have ten thousand dollars —”
          “It will come out of Mother’s account,” said Madeline. “Don't let her fool you, she's a multi-millionaire — but she’ll never trace it. I made sure of that. If she contests it, I’ll see to it they produce a written note from her confirming the donation in her handwriting.”`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `Michael nodded, gulping. She’s the real deal, he thought vaguely. The real deal of what he wasn’t sure — probably a communist. Like Robin Hood. Rob from the rich, from the people who did you wrong, and give to the poor — or the people who aimed to help them. He was positive he would never have had the courage to do such a thing even if he’d had the magic — it would never even have occurred to him. But now that he thought about it, it seemed delightfully, brilliantly maverick in just the way he’d always wanted to be.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“You liked them, then, I take it,” Michael said uneasily, thinking that he hadn’t liked them enough to donate even what he could afford of his own income and feeling ashamed that she saw something in the purity of their ideals that he did not.
          “Room full of embarrassing idiots,” she said, “but I like what they stand for.”
          “I’m not sure — you should meet Ben —”`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“You were obviously the smartest one in the room,” she said. “The one reading out loud was hilarious. And the old lady. So deep...” And she began to go off into bitingly accurate parodies of everyone they’d met — half the time pointing out oddities he’d never noticed, half the time absurdities he’d always felt a vague, patient, accommodating discomfort about. At first he tried to hold back, but soon he found himself in paroxysms of laughter. It was the longest she’d spoken at once since she’d arrived.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `That night, he sat up working on his computer, and then playing on it, late into the night. Madeline sat up with him, reading more books on his bookshelf at times, and at other times inquiring about the game. Michael began to teach her his pirated copy, and she proved predictably excellent at it, though it didn’t hold her interest.
          She was still reading when Michael fell asleep at 4:00. He awoke at noon the next day and realized he was supposed to have a lesson with Verna. He fought with disgust, repulsion, and terror. It seemed entirely possible Verna would find out his every secret—and equally possible that she would not bother to.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“She won’t,” Madeline assured him as she put a cooling plate of scrambled eggs in front of him. “I’ll see to that.” All the same, he nearly canceled, but he wanted to learn what he could.
          When he arrived that evening, the palace was once again in an uproar. First Emma had gone missing: now Verna had. The place where the Harmon greenhouse had been was a minefield of broken glass — apparently it had gone up in flames when guards had tried to enter it. Her home had done the same when the police came knocking there.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `The police were pleased to see Michael. He denied he’d seen anything of Verna since her disappearance, and had no idea where she was. They congratulated him on the lead he’d given them in the palace (apparently his words had been less garbled than he’d thought) — because, in the wreckage of both house and greenhouse, a metal plate had been found engraved with the words, “I am guilty of the Princess’s death. I say this so no other will suffer for my crime. You will not find me. My reasons will become clear in time, and the glorious end will redeem even these means.” The profilers thought the brief investigation Michael had inspired had led to this confession.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `They did, of course, want to know if he could point them toward Verna’s whereabouts. He obligingly dredged up every conversation he could remember. It occurred to him that Madeline would find out at once where her mother was, so he told them he might return with further recollections — that he needed time to look over his old notes. 
          He set off for home in turmoil. He suspected this was all Madeline’s doing and not Verna’s. When he arrived, it was nine-thirty at night and dark. Madeline was reading yet another of his books, this one a physics text. He pulled out some noodles and microwaved them. “Need any?” he asked deferentially.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“Already ate,” she replied. “I see you didn’t have a lesson.” She indicated the radio, which was dialed to the news and recounting everything that had been found. Verna had become the most wanted woman in the Kingdom. 
          “Well…” Michael began and recounted his night. “Did you do it—make her disappear?”
          Madeline said, “I don’t know. I wished very much that she wouldn’t find out our secrets at the meeting, and I think perhaps this is how the universe obliged me. There are many ways to make a wish come true. I must be cautious.”`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“You think?” said Michael. “If it can really be like that — have you read the Monkey’s Paw?”
          “No,” said Madeline.
          “It’s a kids’ story,” Michael said. “Just — this Outlandish artifact — the paw of a kind of demon called a monkey — is sold to someone because it grants wishes, and it does, only in the most awful possible way. So someone wishes for money, and he gets it from insurance for his son’s death. That kind of thing. You have to think hard about the steps as well as the outcome, I guess. I mean, I don’t think your magic is cursed or anything like that, just —”`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“I know my magic,” Madeline said. “I’ve been using it all my life and nothing like that has happened. This with Verna is good.”
          “Yes, I suppose you’re right. All you have to do is find her, and then we can call down the law. This is important. Really important. You have the answer — revenge on her and everything.”
          “I suppose,” Madeline said idly. “But I don’t want to do it that way.”
          “What do you mean? It seems just about perfect.”`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“I told you — I hate society as much as I hate Mother. That’s true of you too,” Madeline said.
          “But Verna killed — she killed my friend! She hurt you! I think —”
          “You’re letting your heart get in the way, Michael. Of course I want to crush her. It’s the only thing that’s kept me alive all these years. But we could do so much more. Verna will wait. I know where she’s hiding and what she’s doing. Wouldn’t her arrest be an astonishing coup for a communist government?”`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“What communist government?” Michael asked wildly. “No one — I repeat, no one — votes for communists. We’re a tiny minority. A hated minority. You’re trying to convince me —”
          “I am telling you, Michael,” said Madeline, “I want all of this to happen very much. And when I want things to happen, they do. Sometimes I work with my body to make them happen. Sometimes I work with my magic. But they happen.”`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `Michael stared at her, finally beginning to think. He didn’t know whether to be hopeful or horrified. This couldn’t be right. Magic couldn’t be that powerful — could it? And if she were really this powerful, why did she want him around? What possible appeal could he hold for her? Wasn’t he just holding her back?
          “I love you,” Madeline said, as if reading his thoughts (perhaps she was). “You saved me, and I’ll never forget that. Kiss me,” she said. “I need you too.”
          Michael did. But he also said, “Do you suppose — do you suppose some of Verna’s awfulness was fear?”`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“Yes,” said Madeline. “She was insane, remember. She thought she was the most powerful person in the world until I came along. How could she not fear that? But she still wished to make use of it. I merely didn’t prove sufficiently pliant and docile...”
          “No, you’re not,” Michael agreed. “So she wanted someone perfect by her standards to wield your powers?”
          Madeline smiled. “Yes. She did not think any mere mortal equal to them.”
          “Do you?” Michael asked.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
      {
          text: `“I want to make our dreams come true, Michael. What could be wrong with that?”
          Michael could think of any number of things, but he thought that was probably being a poor sport. Madeline started seducing him, and he could not resist her. He didn’t want to.`,
          leftImage: MICHAEL_IMAGES.checkLeft,
          rightImage: MICHAEL_IMAGES.checkRight,
      },
  ], [
      {
          title: 'Victory',
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `The day after next, Michael, embarrassed about the glut of noodles even though Madeline seemed at least as no-nonsense in her tastes as he was, cooked fresh vegetables and laid the table nicely. He even scrounged up some candles from his last roommate, and though they were mismatched, one powder blue and unused and the other burnt low and made of unrefined beeswax, he liked the effect.
          Madeline, who had been in and out all day, announced that she had a job.
          “I thought you didn’t—”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `“You’re going to like this,” she said, her small and mysterious smile remaining on her face longer than it usually did.
          “What are you doing?” Michael asked obligingly.
          “Greg from the meeting,” Madeline explained, “connected me to the Party. They need writing and web development. I figure we’d be perfect. At least, I know you’re brilliant with the web, and they liked the sample I wrote them so much they accepted me on the spot. I met with the chairman in person.”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `“You what?”
          Madeline shrugged. “I scheduled an appointment. He’s free all day. Doesn’t even have a job—lives off donations and works for the Party. Smokes weed for the Party, more like.” 
          Michael nodded. He’d imagined Madeline might try to bring about a communist government by magic, but clearly that wasn’t what she had in mind. He asked why not.
          “I do things the easiest way to do them. Sometimes that’s magic, sometimes it’s not.”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `“You make the magic seem awfully easy.”
          She laughed. “Sometimes it is. Getting out of that cell was the nearest thing to impossible I’ve ever done. But I did it.”
          “How can I help?” Michael finally asked humbly.
          She smiled. “Well, I volunteered your software skills. I figured you’d appreciate it. If you don’t, you can tell me to go to hell.”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `“I —” She had anticipated his anger as well as everything else. He thought it through briefly, and he said, “I would be honored to help.”
          “Thought so,” Madeline said. “I am honored to work with you.”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `The Party’s databases and website were, it turned out, a shambles.
          Michael fixed security problems right and left, and, at Madeline’s request, modernized its look too. It was good, fun work, steadier than his usual work, and he was given a freer hand than usual (the Party’s last IT person had been a reluctant undergraduate volunteer who majored in cultural studies, and he was more than happy to give up his post to Michael.) Somehow, Madeline made them pay him more than usual, too, though he’d expected to work for free.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `The police had more questions, too. He did not mention Madeline and felt glad Madeline had not told him where Verna was. If she had, he would have found it harder to deny any knowledge.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `Meanwhile, Madeline announced their promotional materials were rubbish. “Too academic,” she said, “and not even competent at it.” She locked herself into Michael’s room and produced, as he worked in the living room, pages and pages of articles, pamphlets, and FAQs. Their quality impressed even Michael, who fancied himself a good enough writer, and remembered Emma’s being a better one still (though he couldn’t imagine Emma descending to write advertising).`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `Madeline’s writing was smooth, sharp, quotable, and simplified. But it was good simplification, he thought; she honed in on the essentials and stated them, bold and bare and absolute. The Party’s usual publicity person, a professor but, in Madeline’s view, “dumb as a rock,” resigned in anger, but most were pleased.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `As their website improved over the following months, so did their visibility. Madeline aggressively pushed for interviews with newspapers and bloggers and publically donated a large amount of their suddenly-expanding coffers to victims of a tornado that had devastated the northeast of the Kingdom. This controversial move worked brilliantly. Within three weeks, the donations replaced themselves entirely.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `At Madeline’s suggestion (Michael was happy in his dump), they moved into a nicer apartment. She wanted to take out a loan for a house, but Michael refused to go that far — luckily, it turned out, because a month later she started running for public office using the name Alison Montgomery.
          “Mother isn’t gone,” Madeline explained. “I have to change my appearance or she’ll suspect.”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `Michael said something tentative about wigs, but she just laughed. Of course, as he so often seemed to do (and even she did sometimes), he’d forgotten about her magic. Within the next few minutes he found himself facing a green-eyed blonde with very different facial structure. 
          Michael jumped and uttered a small scream. 
          Madeline just laughed. “You’re still mine, Michael. And when we’re alone together, I’ll be myself. Promise.”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `He kissed her shyly and she responded with a caress down the back of his shirt and a giggle. 
          “You make a nice blonde,” he said.
          “I know,” said Madeline. “And they’ll like me better, too. Take me less seriously, but that’s a tradeoff I’m willing to risk.”
          Within three months, “Alison Montgomery” was elected mayor of the small town Helsom, one of the places ravaged by the tornado, after a campaign conducted entirely long-distance.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `He offered to come with her, but she refused. “You’re needed in Prima,” she said, “and we’ll be in touch.” He suppressed an embarrassing amount of self-pitying anger as he saw off the still-unnerving blonde.
          Madeline fired many city employees—keeping, however, a few sentimental favorites (she explained her policy in detail to Michael, who wondered at both her acumen and her ruthlessness)—and instituted a series of exams she wrote herself based on something she’d read to determine who served in what capacity.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `At the same time she poured Party funds into the library and had it and the City Hall renovated. “It’s a shame Helsom is so tiny,” Madeline said. “I would love to establish public transportation, but who needs that when you can walk everywhere? Free vaccines are my next goal.”
          “Tax increases?” Michael asked.
          “Magic. The Party. Streamlining the bureaucracy. Who knows?” said Madeline.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `She looked into education next and, after reading text upon text from Prima University and declaring all of them marginally useful bullshit, instituted educational reforms she’d cobbled together from all of them. She said she was having a deliciously good time, “though,” she added, “it’s still dead boring compared to running a country. Education is the only important thing I control, and honestly, who gives a fuck.”
          “You do,” Michael said. “I mean, you’ve put a lot of work—”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `“Oh, goddammit. Putting work into shit like that is like playing your goddamn video games all day. It’s boring. Michael, I love you. I almost believe you would enjoy that—could do a good job at it. I’m not going to let you rot like that. You’re going to be great.” Before he could essay a response, she said, “I know, dear. I love you. Goodnight.”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `In the meantime, apart from fixing the occasional bug or hack on the Party website, he was at loose ends. Madeline wouldn’t tell him where she’d gotten the money she’d filled his wallet—and, it turned out, his bank account—with. Probably from thin air, possibly from the coffers of the rich and privileged. 
          So he tried to do magic on his own. He nearly asked Madeline if she could teach him, but she was busy, and he had no desire to bore her in the way schools did.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `But he was bored. He took long, aimless walks. He reflected on his first impression of Madeline as a regal, otherworldly beauty. This was almost laughable. Almost. There was still something about her, despite her practicality, that set her apart from every other person he’d ever known. The practicality was a cloak over inner otherness, a fierce — not drive, because that implied the merely active, whereas the energy of her existed in stillness as well as in motion. If most people were, as scripture said, clay, she was something else—flame, perhaps.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `At the local communist meetings, he was treated with a new deference—and spoke with a new deference, careful to avoid contradicting Madeline’s beliefs as written in her pamphlets except in ways that were deeply considered and circumspectly stated. This was not a conscious decision. He actually did agree with her much more than he had two months ago, and his objections to her arguments now felt frivolous, weak, and inconsequential—though he knew uneasily that he would not have felt like that before he met her.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `He felt, as he had not before, what a motley crew of misfits the discussion group was — powerless, impractical, passionate but ultimately clueless. He was beginning to see with Madeline’s eyes — or at least with the eyes of someone who had seen power in action.
          He finally turned to Verna’s journals, except for three Madeline had taken with her. He fancied, vaguely, turning them into a publishable textbook — a notion that Verna would have found both ludicrous and unwise, but surely magic should be a force for social change.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `He read about how particular spells could be performed, but only, say, one in every five tries did he achieve a visible result, and then rarely the result he wanted. Verna had tried to explain how she adjusted her own spells to include him as an agent within them, and how they changed from circumstance to circumstance, but he had grasped only the occasional morsel. He’d suspected she was deliberately mystifying him, that it could not be that complex. And yet — and yet — here he was, poring through her journals and still failing.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `It could be, he admitted, that Verna was simply a poor communicator and a fuzzy thinker. She had something that worked, but perhaps even she did not understand it. Or perhaps she really was as far beyond him as he seemed to feel — but no one had ever been that far beyond him, not in his entire life, not even his physics professors, not even his classmates. Not even, he thought, Madeline, who was indubitably (he thought with only the slightest chagrin) more intelligent than he was.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `Verna had explained once that she was teaching him her own magic system and he would eventually need to invent his own. How he had created the stealth spell was still beyond him; his panic had spurred him, perhaps, to unconscious insights. But he was not like Madeline; he could not wish the simplest thing true. So he persevered.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `The fourth week of Madeline’s absence, and the third week of his magical experiments, he began to realize he did not miss her. She had thrilled him, but she was, as their conversations happened less and less frequently, fading like a dream, and he loved the solitary immersion in efforts at magic, even though they were mostly fruitless so far.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `On one of his long walks, surrounded by autumn leaves, he felt for the first time in weeks a strong, unselfconscious longing for Emma and everything that surrounded her. Gentle, laughing, uninterested in eighty percent of his interests and in violent disagreement with him on the remaining twenty percent. He longed for the castle, for the light on the Harmon greenhouse as he went to study with Verna—he longed for a Verna who hadn’t frozen her own daughter into a wall of ice, though everything Madeline said fit with his more Outlandish ideas about Verna even from back then.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `And he longed to have nothing to do with Madeline again. He could still summon everything he found wonderful in her, but it moved him little. He began to cry as he entered the house. With the profound illogic of grief, he felt that if he had not encountered Madeline, he might have found Emma again.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `Perhaps, though, he ought to explore that symbolism more deeply. Was Madeline the new order and Emma the old? Both beautiful, both powerful, but one brilliant and efficient and aggressive, the other effete and useless and essentially decorative. Oh, how Emma would have hated being called decorative — she worked so hard to be competent and good. He hated even the idea of it for her sake, but at the same time that it seemed obviously true.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `And Madeline loved him, he reminded himself. She agreed with him. She was making his dreams come true. Still, he felt an unutterable sense of loss. He lay awake in bed, crying intermittently, most of the night.
          The next morning, he heard Madeline (“Alison Montgomery”) was running for a seat in the Assembly. “Out with the old and in with the new,” Michael whispered, expecting to feel as sad as he had yesterday — or, alternatively, excited with his first excitement. Instead, he felt dull and empty, though the emptiness was quickly filled as he pursued several new theories about how to make fire.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `He called Madeline, and she apologized for not having told him, explaining that she was scheduled back-to-back, and saying that unless he wanted a public role as her boyfriend, he would have to stay out of the limelight. He said, half-heartedly, that he would like to do that, but she said, “Liar. You hate events, you hate publicity, you like to think. And I’ll make sure you have leave to do that.”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `Madeline was behind in the polls, of course. Neither the left nor the right, however, in Helsom’s county, offered an appealing choice. One was even more of an outsider than Madeline, and the other was inarticulate and lacked charisma. And, three weeks into the campaign, Madeline’s investigations turned up embezzlement on the part of the first and three affairs on the part of the second. Both protested their innocence, of course, but the proof was irrefutable and impossible to fake.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `At least, so it appeared. Michael wondered. But he supposed that in the service of a goal so great planting evidence would not be so terrible a crime — especially since both men (and Madeline quietly made much of the fact that both were men, and that Helsom had not yet ever elected a woman) were part of a corrupt system and meant to do nothing to bring it down.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `When another tornado hit, this time in a neighborhood close to Michael, though it did not touch his apartment (to his surprise, given the predictions), Madeline stepped up again, giving her own money (Alison Montgomery was supposed to be independently wealthy, making her position all the more touching and self-sacrificing, as well as explaining the money; Madeline reassured Michael repeatedly that Alison’s paperwork was all in order and that she’d even found someone to claim to be her grandmother).`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `No communist had won a seat on the Assembly since the beginning of the Party in 686. It was all the stranger because the Kingdom was growing conservative. Michael was dumbstruck when the news came out in November. He called her and left a message. He resisted the impulse to intrude by calling again and spent that day feeling more unreal than ever. He went to the communist discussion group to celebrate with cheap wine and beer and came home at nine.
          That night, at midnight, dressed in a black cloak that covered her face, Madeline appeared at his door.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `“My love,” she said simply, stepping in and shrugging off the cloak to reveal the black-haired beauty she once had been the moment the door was shut. 
          He almost thought she was a hallucination. She was so much more beautiful than he’d remembered—though not different in any way he could pinpoint. He could tell he was staring, but he couldn’t tell what he felt. His heart pounded.`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `“I am going to win the world—and it’s all for you,” she said, leading him unresisting but unhelping to the bedroom, slipping her hand again under his shirt, and taking it off as they neared the creaky old bed. “Really, it’s all for you. I’ve brought wine.”
          And, just like her beauty, it was better than it ever had been, as far as he could tell, as they lay naked together, snacking on wine and cheese. She refused to mention politics, except to say, “This is the goal. This—the rest—the rest is just a means to an end. And that end is a life for everyone as free — as beautiful — as happy — as we have.”`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
      {
          text: `Michael floated on the taste of wine, on fear and on ecstasy. Part of him remained cold, doubting, cynical, untouched by everything. He left it behind. He grew and grew, past his own mind into`,
          leftImage: MICHAEL_IMAGES.voteLeft,
          rightImage: MICHAEL_IMAGES.voteRight,
      },
  ],
];