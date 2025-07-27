import { JanuaryColor } from "../../../../shared/color";

export const QUESTION_TYPES = {
  // colorPicker: 'colorPicker',
  rank: 'rank',
  slider: 'slider',
  // freeAnswer: 'freeAnswer',
} as const;

export type QuestionType = typeof QUESTION_TYPES[keyof typeof QUESTION_TYPES]

export const PARTS = ['abstract', 'ideal', 'actual'];

type Part = 'abstract' | 'ideal' | 'actual';
type BodyPart = 'bone' | 'foot' | 'belly' | 'blood' | 'hand' | 'heart' | 'eye' | 'nerve' | 'image';
type SingleBodyPart = 'shadow' | 'voice' | 'light';

export interface PossibleResult {
  title: string;
  description: string;
  score: number;
}

export interface ParticularSliderScoring {
  result: number;
  leftIsPositive?: boolean;
}

export interface PartScore {
  salience?: number;
  contents?: string | boolean;
  aesthetic?: {
    color?: JanuaryColor;
    associations?: string[] | boolean;
  }
}

export interface BodyPartScore {
  abstract?: PartScore;
  ideal?: PartScore;
  actual?: PartScore;
}

export interface GeneralScoring {
  subdivided?: {
    bone?: BodyPartScore;
    foot?: BodyPartScore;
    belly?: BodyPartScore;
    blood?: BodyPartScore;
    hand?: BodyPartScore;
    heart?: BodyPartScore;
    eye?: BodyPartScore;
    nerve?: BodyPartScore;
    image?: BodyPartScore;
  };
  single?: {
    shadow?: PartScore;
    light?: PartScore;
    voice?: PartScore;
  };
}

export interface SliderQuestion {
  type: 'slider';
  question: string;
  questionEnd?: string;
  left: string;
  right: string;
  particular: ParticularSliderScoring;
  general?: GeneralScoring;
}

export interface ParticularRankScoring {
  [key: number]: number;
}
export interface RankOption {
  text: string;
  particular: ParticularRankScoring;
  general?: GeneralScoring;
}

export interface RankQuestion {
  type: 'rank';
  question: string;
  options: RankOption[]
}

export type Question = SliderQuestion | RankQuestion;

export interface Quiz {
  title: string;
  description: string;
  possibleResults: PossibleResult[]
  questions: Question[];
}

export const QUIZZES: Quiz[] = [
  {
      title: 'Do you really exist?',
      description: 'I hope so! Gets kinda lonely out here.',
      possibleResults: [
          {
              title: 'Yes',
              description: 'Yay!!!! You appear to be a real person who exists. Maybe you\'re just making things up though.',
              score: 0,
          },
          {
              title: 'No',
              description: 'I suspect you are a bot, a figment of my imagination, something Elsewhere is sending to mock me, or otherwise not even trying :(',
              score: 0,
          },
      ],
      questions: [
          {
              type: QUESTION_TYPES.slider,
              question: 'Who people think they are is',
              questionEnd: 'of who they really are.',
              left: 'none',
              right: 'all',
              particular: {
                  result: 0,
              },
              general: {
                  subdivided: {
                      image: {
                          abstract: {
                              salience: 1,
                          },
                      },
                  },
              }
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I spend',
              questionEnd: 'of my time trying to understand myself.',
              left: 'none',
              right: 'all',
              general: {
                  subdivided: {
                      image: {
                          actual: {
                              salience: 1,
                          },
                      },
                  },
              },
              particular: {
                  result: 0,
              }
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'The impressions the world makes on me are',
              questionEnd: 'of me.',
              left: 'none',
              right: 'all',
              general: {
                  subdivided: {
                      eye: {
                          actual: {
                              salience: 1,
                          },
                      },
                  },
              },
              particular: {
                  result: 1,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I live',
              questionEnd: 'in my head.',
              left: 'not at all',
              right: 'entirely',
              general: {
                  subdivided: {
                      nerve: {
                          actual: {
                              salience: 1,
                          },
                      },
                  },
              },
              particular: {
                  result: 1,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I',
              questionEnd: 'want things that bring short-term pleasure and long-term pain.',
              left: 'never',
              right: 'always',
              general: {
                  subdivided: {
                      belly: {
                          actual: {
                              salience: 1,
                          },
                      },
                  },
                  single: {
                      shadow: {
                          salience: 1,
                      },
                  },
              },
              particular: {
                  result: 0,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I',
              questionEnd: 'the person I want to be',
              left: 'have nothing to do with',
              right: 'am',
              general: {
                  subdivided: {
                      image: {
                          actual: {
                              salience: 1,
                          },
                      },
                  },
                  single: {
                      shadow: {
                          salience: -1,
                      },
                  },
              },
              particular: {
                  result: 1,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I want pleasure to be',
              questionEnd: 'of my life.',
              left: 'none',
              right: 'all',
              general: {
                  subdivided: {
                      belly: {
                          ideal: {
                              salience: 1,
                          },
                      },
                  },
              },
              particular: {
                  result: 0,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I want to introspect',
              left: 'less',
              right: 'more',
              general: {
                  subdivided: {
                      image: {
                          ideal: {
                              salience: 1,
                          },
                      },
                  },
                  // add a way to make "closer to the middle" the measurement in question; this one the further you get from 0, the greater the salience of the shadow
              },
              particular: {
                  result: 1,
              },
          },
      ],
  },
  {
      title: 'What is your life purpose?',
      description: 'We weren\'t just put on this earth to sit on our asses and breathe oxygen, I want to think life is about MORE than that <3<3<3. What is your life about????',
      possibleResults: [
          {
              title: 'You\'re an Appreciator!',
              description: 'Some people think life is all about Giving and Doing, and they\'re not WRONG, you know. But honest pleasure and good things received with gratitude is worth so so much too, and this time around the karmic wheel I think you\'re here to enjoy yourself and reap the rewards of your labors <3. Maybe you were deprived as a kid, or in a past life, I dunno, or maybe you\'re just childlike in the good way, but your life seems to be all about admiring and loving and appreciating all the good things the world has on offer!',
              score: 0,
          },
          {
              title: 'You\'re an Achiever!',
              description: 'You always knew you were destined for great things, and whaddya know, you\'re RIGHT!! You are all about doing your best, and being THE best, and maybe that means you\'ll make great art or get elected to the senate or found a startup that\'ll save the world yadda yadda yadda. You want to be at the head of the pack, making the most difference you possibly can, and that is absolutely where you belong :D.',
              score: 0,
          },
          {
              title: 'You\'re an Assistant!',
              description: 'LOL, doesn\'t sound so sexy, does it. But without a TON of people like you, everyone else would be SOL. You don\'t NEED to be sexy, you don\'t NEED to be Number One, you don\'t NEED to be the driving force behind making the world a better place. You just need to keep doin\' the best you can at what you need to do, whether that\'s plumbing or teaching. As a single person, your contributions don\'t count for much in themselves, but don\'t let it get you down, because as a group you\'re damn near omnipotent. Don\'t let the ambitious louts get under your skin, just keep doing your part. \'Cuz you absolutely rule, literally and figuratively.',
              score: 0,
          },
      ],
      questions: [
          {
              type: QUESTION_TYPES.rank,
              question: 'The most important part of a person is',
              options: [
                  {
                      text: 'Their basic needs: deprive someone of air, or food, or healthcare, and it isn\'t pretty.',
                      general: {
                        subdivided: {
                          bone: {
                              abstract: {
                                  salience: 1,
                              },
                          },
                        },
                      },
                      particular: {
                          2: 1,
                      },
                  },
                  {
                      text: 'Their habits, the little day-to-day stuff that consumes most of their time.',
                      general: {
                        subdivided: {
                          foot: {
                              abstract: {
                                  salience: 1,
                              },
                          },
                        },
                      },
                      particular: {
                          2: 1,
                      },
                      
                  },
                  {
                      text: 'What brings them pleasure, their appetites, the things they seek out, the things they want.',
                      general: {
                        subdivided: {
                          belly: {
                              abstract: {
                                  salience: 1,
                              }
                          },
                        },
                      },
                      particular: {
                          0: 1,
                          1: -1,
                          2: -1,
                      },
                      
                  },
                  {
                      text: 'The choices they make, the effect they have on the world.',
                      general: {
                        subdivided: {
                          hand: {
                              abstract: {
                                  salience: 1,
                              },
                          },
                        },
                      },
                      particular: {
                          0: -1,
                          1: 1,
                      },
                      
                  },
                  {
                      text: 'Whom they love, how they love, how they feel about people and things.',
                      general: {
                        subdivided: {
                          heart: {
                              abstract: {
                                  salience: 1,
                              },
                          },
                        },
                      },
                      particular: {
                          0: 1,
                      },
                      
                  },
                  {
                      text: 'What they reject, what they hate, what they are not.',
                      general: {
                        single: {
                          shadow: {
                              salience: 1,
                          },
                        },
                      },
                      particular: {},
                      
                  },
                  {
                      text: 'What really motivates them.',
                      general: {
                        subdivided: {
                          blood: {
                              abstract: {
                                  salience: 1,
                              },
                          },
                        }
                      },
                      particular: {
                          1: 1,
                      },
                      
                  },
                  {
                      text: 'The unique way they see the world.',
                      general: {
                        subdivided: {
                          eye: {
                              abstract: {
                                  salience: 1,
                              },
                          },
                        },
                      },
                      particular: {
                          0: 1,
                          2: -1,
                      },
                      
                  },
                  {
                      text: 'What they believe, what they think about, what and how and why they understand.',
                      general: {
                        subdivided: {
                          nerve: {
                              abstract: {
                                  salience: 1,
                              },
                          },
                        },
                      },
                      particular: {
                          0: 1,
                          1: 1,
                          2: -1,
                      },
                      
                  },
                  {
                      text: 'What that person sees in themselves, chooses to be.',
                      general: {
                        subdivided: {
                          image: {
                              abstract: {
                                  salience: 1,
                              },
                          },
                        },
                      },
                      particular: {
                          1: 1,
                      },
                      
                  },
              ],
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'My role models are driven to',
              options: [
                  {
                      text: 'Learn',
                      general: {
                        single: {
                          light: {
                              salience: 1,
                              contents: 'true',
                          },
                        },
                        subdivided: {
                          nerve: {
                              ideal: {
                                  salience: 1,
                              },
                          },
                        },
                      },
                      particular: {
                          0: 1,
                          1: 1,
                      },
                  },
                  {
                      text: 'Win',
                      general: {
                        single: {
                          light: {
                              contents: 'text',
                          },
                        },
                        subdivided: {
                          blood: {
                              ideal: {
                                  salience: 1,
                              },
                          },
                        },
                      },
                      particular: {
                          0: -1,
                          1: 1,
                          2: -1,
                      },
                      
                  },
                  {
                      text: 'Create',
                      general: {
                        single: {
                          light: {
                              salience: 1,
                              contents: true,
                          },
                        },
                      },
                      particular: {
                          1: 1,
                          2: -1,
                      },
                      
                  },
                  {
                      text: 'Improve',
                      general: {
                        single: {
                          light: {
                              salience: 1,
                              contents: true,
                          },
                        }
                      },
                      particular: {
                          1: 1,
                          2: 1,
                      },
                      
                  },
                  {
                      text: 'Help',
                      general: {
                        single: {
                          light: {
                              salience: 1,
                              contents: true,
                          },
                        },
                        subdivided: {
                          heart: {
                              ideal: {
                                  salience: 1,
                              },
                          },
                        },
                      },
                      particular: {
                          2: 1,
                      },
                      
                  },
              ],
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'If I could choose my deepest desires, I would choose to care about goals that are',
              left: 'satisfying and achievable.',
              right: 'ambitious, yea, infinite.',
              general: {
                subdivided: {
                  blood: {
                      ideal: {
                          contents: true,
                      }
                  }
                },
              },
              particular: {
                  result: 1,
              }
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'When they point in different directions, I hope to embrace',
              questionEnd: 'as my chief motivator.',
              left: 'duty',
              right: 'desire',
              general: {
                subdivided: {
                  blood: {
                      ideal: {
                          contents: true,
                      }
                  }
                }
              },
              particular: {
                  result: 2,
                  leftIsPositive: true, 
              }
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'Emotionally, I care most about',
              options: [
                  {
                      text: 'My family and friends',
                      general: {
                        subdivided: {
                          heart: {
                              actual: {
                                  salience: 1,
                                  contents: true,
                              },
                          },
                        },
                      },
                      particular: {
                          1: -1,
                          2: 1,
                      },
                      
                  },
                  {
                      text: 'Whomever I\'m romantically involved with',
                      general: {
                        subdivided: {
                          heart: {
                              actual: {
                                  salience: 1,
                                  contents: true,
                              },
                          },
                        },
                      },
                      particular: {
                          0: 1,
                          2: -1,
                      },
                      
                  },
                  {
                      text: 'My work',
                      general: {
                        subdivided: {
                          heart: {
                              actual: {
                                  salience: -1,
                                  contents: true,
                              },
                          },
                        },
                      },
                      particular: {
                          1: 1,
                          2: 1,
                      },
                      
                  },
                  {
                      text: 'Myself',
                      general: {
                        subdivided: {
                          heart: {
                              actual: {
                                  contents: true,
                              },
                          },
                        },
                      },
                      particular: {
                          0: 1,
                          1: 1,
                      },
                      
                  },
                  {
                      text: 'Pleasure',
                      general: {
                        subdivided: {
                          heart: {
                              actual: {
                                  contents: true,
                              },
                          },
                        }
                      },
                      particular: {
                          0: 1,
                          1: -1,
                          2: -1,
                      },
                      
                  },
                  {
                      text: 'Survival',
                      general: {
                        subdivided: {
                          heart: {
                              actual: {
                                  contents: true,
                              },
                          },
                        },
                      },
                      particular: {
                          2: 1,
                      },
                      
                  },
                  {
                      text: 'Art',
                      general: {
                        subdivided: {
                          heart: {
                              actual: {
                                  salience: 1,
                                  contents: true,
                              },
                          },
                        },
                      },
                      particular: {
                          1: 1,
                      },
                      
                  },
              ],
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I',
              questionEnd: 'want to change to fit my environment.',
              left: 'do not',
              right: 'do',
              general: {
                subdivided: {
                  eye: {
                      ideal: {
                          salience: 1,
                      }
                  }
                },
              },
              particular: {
                  result: 1,
                  leftIsPositive: true, 
              }
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'Whether I want to be or not, I am someone who',
              questionEnd: 'on my feelings and ideas.',
              left: 'does not act',
              right: 'acts',
              general: {
                subdivided: {
                  hand: {
                      actual: {
                          salience: 1,
                      }
                  }
                },
              },
              particular: {
                  result: 1, 
              }
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I',
              questionEnd: 'my surroundings to be beautiful, expressive, or interesting.',
              left: 'do not need',
              right: 'need',
              general: {
                  subdivided: {
                      eye: {
                          actual: {
                              salience: 1,
                          },
                      },
                  },
              },
              particular: {
                  result: 0,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I wish I cared',
              questionEnd: 'about nature.',
              left: 'less',
              right: 'more',
              general: {
                  subdivided: {
                      heart: {
                          ideal: {
                              contents: true,
                          }
                      }
                  },
                  // salience of the shadow
              },
              particular: {
                  result: 0,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I wish I cared',
              questionEnd: 'about the people in my life.',
              left: 'less',
              right: 'more',
              general: {
                  subdivided: {
                      heart: {
                          ideal: {
                              contents: true,
                          },
                      },
                  },
                  // salience of the shadow
              },
              particular: {
                  result: 0,
                  leftIsPositive: true,
              }
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I wish I cared',
              questionEnd: 'about the being a good person.',
              left: 'less',
              right: 'more',
              general: {
                  subdivided: {
                      heart: {
                          ideal: {
                              contents: true,
                          },
                      },
                  },
                  // salience of the shadow
              },
              particular: {
                  result: 0,
                  leftIsPositive: true,
              }
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I wish I cared',
              questionEnd: 'about my own needs.',
              left: 'less',
              right: 'more',
              general: {
                  subdivided: {
                      heart: {
                          ideal: {
                              contents: true,
                          },
                      },
                  },
                  // salience of the shadow
              },
              particular: {
                  result: 2,
                  leftIsPositive: true,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I wish I cared',
              questionEnd: 'about art.',
              left: 'less',
              right: 'more',
              general: {
                  subdivided: {
                      heart: {
                          ideal: {
                              contents: true,
                          },
                      },
                  },
                  // salience of the shadow
              },
              particular: {
                  result: 1,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I wish I cared',
              questionEnd: 'about ideas.',
              left: 'less',
              right: 'more',
              general: {
                  subdivided: {
                      heart: {
                          ideal: {
                              contents: true,
                          },
                      },
                  },
                  // salience of the shadow
              },
              particular: {
                  result: 1,
              },
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'My goals and dreams include:',
              options: [
                  {
                      text: 'Creating a novel, song, painting, film, game, carving, etc., that I love',
                      general: {
                          subdivided: {
                              hand: {
                                  ideal: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                      },
                  },
                  {
                      text: 'Starting a business around something I care about',
                      general: {
                          subdivided: {
                              hand: {
                                  ideal: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                          2: -1,
                      },
                  },
                  {
                      text: 'Starting a charity',
                      general: {
                          subdivided: {
                              hand: {
                                  ideal: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                          2: 1,
                      },
                  },
                  {
                      text: 'Building my own house',
                      general: {
                          subdivided: {
                              hand: {
                                  ideal: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                      },
                  },
                  {
                      text: 'Getting a job in line with my interests',
                      general: {
                          subdivided: {
                              hand: {
                                  ideal: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: 1,
                          1: 1,
                      },
                  },
                  {
                      text: 'Setting an athletic record',
                      general: {
                          subdivided: {
                              hand: {
                                  ideal: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                      },
                  },
              ],
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'I like to feel that I am',
              options: [
                  {
                      text: 'Impressive',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          1: 1,
                      },
                  },
                  {
                      text: 'Kind',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          2: 1,
                      },
                  },
                  {
                      text: 'Intelligent',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          1: 1,
                      },
                  },
                  {
                      text: 'Wise',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          2: 1,
                      },
                  },
                  {
                      text: 'Original',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          0: 1,
                          1: 1,
                      },
                  },
                  {
                      text: 'Strong',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          1: 1,
                          2: 1,
                      },
                  },
                  {
                      text: 'Driven',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          1: 1,
                      },
                  },
                  {
                      text: 'Charming',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          0: 1,
                      },
                  },
                  {
                      text: 'Funny',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          0: 1,
                      },
                  },
                  {
                      text: 'Gentle',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          0: 1,
                          2: 1,
                      },
                  },
                  {
                      text: 'Dark',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          2: -1,
                      },
                  },
                  {
                      text: 'Good',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          1: 1,
                          2: 1,
                      },
                  },
                  {
                      text: 'Passionate',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                }
                              }
                          }
                      },
                      particular: {
                          0: 1,
                          1: 1,
                          2: -1,
                      },
                  },
                  {
                      text: 'Successful',
                      general: {
                          subdivided: {
                              image: {
                                ideal: {
                                  contents: true,
                                },
                              }
                          }
                      },
                      particular: {
                          1: 1,
                          2: 1,
                      },
                  },
              ],
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'I most want to conquer (in myself, the world, or both)',
              options: [
                  {
                      text: 'Greed',
                      general: {
                          single: {
                              shadow: {
                                  contents: true,
                              },
                          },
                      },
                      particular: {
                          1: -1,
                      },
                  },
                  {
                      text: 'Cruelty',
                      general: {
                          single: {
                              shadow: {
                                  contents: true,
                              },
                          },
                      },
                      particular: {
                          2: 1,
                      },
                  },
                  {
                      text: 'Pride',
                      general: {
                          single: {
                              shadow: {
                                  contents: true,
                              },
                          },
                      },
                      particular: {
                          1: -1,
                          2: 1,
                      },
                  },
                  {
                      text: 'Ignorance',
                      general: {
                          single: {
                              shadow: {
                                  contents: true,
                              },
                          },
                      },
                      particular: {
                          1: 1,
                      },
                  },
              ],
          }
      ]
  },
  {
      title: 'What personality test are you?',
      description: '',
      possibleResults: [
          {
              title: 'One of Quizzy Izzy\'s',
              description: 'You\'re kinda random and personal and silly sometimes and trying wayyyyyyyyyy too hard to be deep others <3, but regardless of that you are much more about THE PROCESS AND JOY OF MAKING CATEGORIES than you are about getting, like, actual valid results. Either that or you just mess around on the internet too much.',
              score: 0,
          },
          {
              title: 'OCEAN',
              description: 'You are about as respectable as a personality inventory gets. You are pretty good at understanding people (of your own culture at least), but you\'re a bit too serious and bland and cautious for some.',
              score: 0,
          },
          {
              title: 'Enneagram',
              description: 'You are not super scientific, but you\'re pretty and also about spiritual development, so I think you\'re cool <3',
              score: 0,
          },
          {
              title: 'None!',
              description: 'Your objections to classifying people on scientific, pseudoscientific or even completely frivolous systems runs too deep for you to qualify as a personality test. Consider a career as one of those CYOA thingies instead! They\'re all about choice <3.',
              score: 0,
          },
      ],
      questions: [
          {
              type: QUESTION_TYPES.rank,
              question: 'To what extent is who a person is',
              options: [
                  {
                      text: 'Innate',// leads to next question?
                      general: {
                          subdivided: {
                              bone: {
                                  abstract: {
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                          2: 1,
                          3: -1,
                      },

                  },
                  {
                      text: 'A product of the environment, social and biological',
                      general: {
                          subdivided: {
                              bone: {
                                  abstract: {
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                          3: 1,
                      },
                  },
                  {
                      text: 'A result of what they choose',
                      general: {
                          subdivided: {
                              hand: {
                                  abstract: {
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: -1,
                          2: -1,
                          3: 1,
                      },
                  },
              ],
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'Science?',
              left: 'No, thank you!',
              right: 'Yes, please!',
              general: {
                  subdivided: {
                      bone: {
                          abstract: {
                              salience: 1,
                          }
                      },
                      image: {
                          abstract: {
                              salience: -1,
                          },
                      },
                  },
              },
              particular: {
                  result: 1,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'Deep down inside, we\'re all',
              left: 'the same. Look how much DNA we share.',
              right: 'different. Look at everything about us.',
              general: {
                  subdivided: {
                      bone: {
                          abstract: {
                              salience: 1,
                          },
                      },
                      heart: {
                          abstract: {
                              salience: 1,
                          },
                      },
                      nerve: {
                          abstract: {
                              salience: -1,
                          },
                      },
                      image: {
                          abstract: {
                              salience: 1,
                          },
                      },
                  },
              },
              particular: {
                  result: 3,
                  leftIsPositive: true,
              },
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'People\'s core motivations tend to be',
              options: [
                  {
                      text: 'Sex',
                      general: {
                          subdivided: {
                              belly: {
                                  abstract: {
                                      salience: 1,
                                  },
                              },
                              blood: {
                                  abstract: {
                                      salience: 1,
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: 1,
                      },
                  },
                  {
                      text: 'Love',
                      general: {
                          subdivided: {
                              heart: {
                                  abstract: {
                                      salience: 1,
                                  },
                              },
                              blood: {
                                  abstract: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          2: 1,
                          3: 1,
                      }
                  },
                  {
                      text: 'Power',
                      general: {
                          subdivided: {
                              blood: {
                                  abstract: {
                                      salience: 1,
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {}
                  },
                  {
                      text: 'Creativity',
                      general: {
                          subdivided: {
                              nerve: {
                                  abstract: {
                                      salience: 1,
                                  },
                              },
                              heart: {
                                  abstract: {
                                      salience: 1,
                                  },
                              },
                              blood: {
                                  abstract: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: 1,
                          3: 1,
                      },
                  },
                  {
                      text: 'Curiosity',
                      general: {
                          subdivided: {
                              nerve: {
                                  abstract: {
                                      salience: 1,
                                  },
                              },
                              eye: {
                                  abstract: {
                                      salience: 1,
                                  },
                              },
                              blood: {
                                  abstract: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          3: -1,
                      },
                  },
                  {
                      text: 'Meaning',
                      general: {
                          subdivided: {
                              image: {
                                  abstract: {
                                      salience: 1,
                                  },
                              },
                              blood: {
                                  abstract: {
                                      contents: true,
                                  },
                              },
                          },
                          single: {
                              light: {
                                  salience: 1,
                              },
                          },
                      },
                      particular: {
                          1: -1,
                          2: 1,
                          3: 1,
                      },
                  },
              ],
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'The existence of natural limitations on our abilities is',
              left: 'precious and humbling.',
              right: 'tragic and temporary.',
              general: {
                  subdivided: {
                      bone: {
                          ideal: {
                              salience: 1,
                              contents: true,
                          },
                      },
                  },
              },
              particular: {
                  result: 3,
              },
          },
      ],
  },
  {
      title: 'What book that I like should you read next?',
      description: 'Get those recs <3',
      possibleResults: [
          {
              title: 'Hyperbole and a Half',
              description: 'Or its sequel. These are dark and sad and absolutely fucking hilarious kinda graphic novel thingies that started as an awesome blog. Captures so much about contemporary life.',
              score: 0,
          },
          {
              title: 'At the Back of the North Wind',
              description: 'Sweet, numinous children\'s book/cute little theodicy parable. Disturbing in the way of Victorian moralists, beautiful in the way of Victorian moralists.',
              score: 0,
          },
          {
              title: 'Gogol short stories',
              description: 'Super strange. Absurd. Nabokov thought it captured something about wormholes or four-dimensional space or something. Quiet pathos in addition.',
              score: 0,
          },
          {
              title: 'Wikipedia',
              description: 'Not a book lol, if it were it\'d be like a million pages long, but you can find out more than you ever wanted to know about almost anything <3',
              score: 0,
          },
          {
              title: 'Emily Dickinson poems',
              description: 'What more is there to say? Dense, shattering, wild but contained. Sacrilegious. Mystical. Y\'know.',
              score: 0,
          },
          {
              title: 'A Wrinkle in Time',
              description: 'Inspiring, wonderfully imaginative, basically positive children\'s science-fiction/fantasy crossover. Highly recommend.',
              score: 0,
          },
          {
              title: 'Portrait of a Lady',
              description: 'One of the few pieces of realistic fiction that does not make me want to bite my face off.',
              score: 0,
          },
          {
              title: 'Childhood\'s End',
              description: 'Kinda mind-blowing classic science fiction about telepaths and the end of humanity.',
              score: 0,
          }
      ],
      questions: [
          {
              type: QUESTION_TYPES.rank,
              question: 'As an image, a skeleton is',
              options: [
                  {
                      text: 'Disturbing',
                      general: {
                          subdivided: {
                              bone: {
                                  abstract: {
                                      aesthetic: {
                                          associations: true,
                                      },
                                  },
                              },
                          },
                          single: {
                              shadow: {
                                  salience: 1,
                              },
                          },
                      },
                      particular: {
                          0: 1,
                          1: 1,
                          2: 0.5,
                          4: 0.5,
                          5: 0.25,
                          6: 0.5,
                          7: 0.25,
                      },
                  },
                  {
                      text: 'Darkly wonderful',
                      general: {
                          subdivided: {
                              bone: {
                                  abstract: {
                                      aesthetic: {
                                          associations: true,
                                      },
                                  },
                              },
                          },
                          single: {
                              shadow: {
                                  salience: 1,
                              },
                          },
                      },
                      particular: {
                          0: -1,
                          1: -0.5,
                          2: 0.5,
                          4: 0.5,
                          6: 0.5,
                          7: 0.25,
                      },
                  },
                  {
                      text: 'Beautiful and not even dark; we fear death too much',
                      general: {
                          subdivided: {
                              bone: {
                                  abstract: {
                                      aesthetic: {
                                          associations: true,
                                      },
                                  },
                              },
                          },
                          single: {
                              shadow: {
                                  salience: -1,
                              },
                          },
                      },
                      particular: {
                          0: -1,
                          1: 1,
                          3: 0.5,
                          4: -0.25,
                          5: 1,
                          6: -0.25,
                          7: 0.25,
                      }
                  },
                  {
                      text: 'An interesting way to learn anatomy',
                      general: {
                          subdivided: {
                              bone: {
                                  abstract: {
                                      aesthetic: {
                                          associations: true,
                                      },
                                  },
                              },
                          },
                          single: {
                              shadow: {
                                  salience: -1,
                              },
                          },
                      },
                      particular: {
                          0: 0.5,
                          1: -1,
                          2: -1,
                          3: 1,
                          5: 0.25,
                      },
                  },
                  {
                      text: 'Not something I have a strong reaction to',
                      general: {
                          subdivided: {
                              bone: {
                                  abstract: {
                                      aesthetic: {
                                          associations: true,
                                      },
                                  },
                              },
                          },
                          single: {
                              shadow: {
                                  salience: -1,
                              },
                          },
                      },
                      particular: {
                          0: 1,
                          1: -1,
                          2: -0.5,
                          3: 0.25,
                          4: -1,
                          5: -0.25,
                          6: 0.5,
                          7: 0.5,
                      },
                  },
              ],
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'Which are you likeliest to read?',
              options: [
                  {
                      text: 'A fantasy novel',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              nerve: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                          single: {
                              light: {
                                  salience: 1,
                              },
                              shadow: {
                                  salience: 1,
                              }
                          },
                      },
                      particular: {
                          1: 0.5,
                          2: 0.25,
                          3: 0.25,
                          4: -0.25,
                          5: 1,
                          6: -1,
                          7: 0.5,
                      }
                  },
                  {
                      text: 'Literary fairy tales',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              nerve: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                          single: {
                              light: {
                                  salience: 1,
                              },
                              shadow: {
                                  salience: 1,
                              },
                          },
                      },
                      particular: {
                          0: -1,
                          1: 1,
                          2: 1,
                          4: 0.5,
                          5: 1,
                          6: 0.5,
                          7: 0.5,
                      }
                      
                  },
                  {
                      text: 'Something about nature; Mary Oliver or Thoreau',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                      salience: 1,
                                  },
                              },
                          },
                          single: {
                              light: {
                                  salience: 1,
                              },
                              shadow: {
                                  salience: -1,
                              },
                          },
                      },
                      particular: {
                          0: -1,
                          1: 0.5,
                          2: 0.25,
                          3: 0.25,
                          4: 0.5,
                          5: 0.25,
                          6: -0.25,
                          7: -1,
                      }
                  },
                  {
                      text: 'Something really out there; absurd, surreal, genre-busting, language-breaking, shows you the cracks in the things',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              nerve: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                          single: {
                              light: {
                                  salience: -1,
                              },
                              shadow: {
                                  salience: 1,
                              },
                          },
                      },
                      particular: {
                          0: 0.5,
                          2: 1,
                          3: -0.25,
                          4: 0.5,
                          5: -0.5,
                          6: -0.5,
                          7: -.25,
                      }
                  },
                  {
                      text: 'A cute, funny slice-of-life comic',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: 1,
                          4: -1,
                          5: -0.25,
                          6: -0.5,
                          7: -1,
                      }
                  },
                  {
                      text: 'Realistic litfic, neither melodramatic nor afraid of tragedy, large or small',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              nerve: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                          single: {
                              light: {
                                  salience: -1,
                              },
                          },
                      },
                      particular: {
                          1: 0.5,
                          2: -0.25,
                          3: -0.5,
                          4: 0.25,
                          5: -0.25,
                          6: 1,
                          7: -1,
                      }
                  },
                  {
                      text: 'A memoir',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              nerve: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                      },
                      particular: {
                          0: 1,
                          3: 0.5,
                          6: 0.25,
                          7: -1,
                      }
                  },
                  {
                      text: 'A science article',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              nerve: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                      },
                      particular: {
                          0: 0.5,
                          3: 1,
                          5: 0.25,
                          7: 0.5,
                      }
                  },
              ],
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'I wish my mind were',
              options: [
                  {
                      text: 'Sweet, harmonious, and complex, like a chamber group playing Bach',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              heart: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                          single: {
                              light: {
                                  salience: 1,
                              },
                              shadow: {
                                  salience: -1,
                              },
                          },
                      },
                      particular: {
                          1: 1,
                          2: -1,
                          3: 0.25,
                          4: 0.5,
                          5: 1, // I don\'t really do orderly harmonious fiction :()
                          6: 1,
                          7: -0.5,
                      }
                  },
                  {
                      text: 'As wild and strange as snatches of bagpipes from who-knows-where',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              heart: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                          single: {
                              light: {
                                  salience: 1,
                              },
                          },
                      },
                      particular: {
                          0: -1,
                          1: 1,
                          2: 0.5,
                          3: -1,
                          4: 0.5,
                          5: 0.5,
                          6: 0.25,
                          7: 0.75,
                      }
                  },
                  {
                      text: 'Replete with the full depths and heights of the human experience, imaginary and actual. Beethoven, maybe.',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              nerve: {
                                  actual: {
                                      salience: 1,
                                  }
                              },
                          },
                          single: {
                              light: {
                                  salience: 1,
                              },
                              shadow: {
                                  salience: 1,
                              },
                          },
                      },
                      particular: {
                          1: 0.5,
                          2: 0.5,
                          3: -0.25,
                          4: 1, // I don\'t really do orderly Beethoven fiction :()
                          5: 0.25,
                          6: 1,
                          7: 0.5,
                      }
                  },
                  {
                      text: 'Simple and true, birdsong and a babbling brook on a cool June morning',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              heart: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                          single: {
                              light: {
                                  salience: 1,
                              },
                          },
                      },
                      particular: {
                          0: -1,
                          1: 1,
                          2: 0.25,
                          3: -0.5,
                          4: 0.25,
                          5: 1,
                          6: -0.25,
                          7: -1,
                      }
                  },
                  {
                      text: 'True to the complexity, incoherence, and discord of contemporary life: atonal',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                      salience: 1,
                                  },
                              },
                              nerve: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                          single: {
                              light: {
                                  salience: 1,
                              },
                              shadow: {
                                  salience: -1,
                              },
                          },
                      },
                      particular: {
                          0: 1,
                          1: -1,
                          2: 1,
                          3: 0.5,
                          5: -0.5,
                          6: 0.25,
                          7: 0.5,
                      }
                  },
              ]
          }, 
          {
              type: QUESTION_TYPES.rank,
              question: 'How important is the intellect in today\'s world?',
              options: [
                  {
                      text: 'Not enough',
                      general: {
                          subdivided: {
                              nerve: {
                                  actual: {
                                      contents: true,
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: -1,
                          3: 1,
                          4: 0.5,
                          5: 0.5,
                          6: 0.5,
                          7: 0.5,
                      },
                  },
                  {
                      text: 'Too much',
                      general: {
                          subdivided: {
                              nerve: {
                                  actual: {
                                      contents: true,
                                      salience: -1,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                          3: -1,
                          4: -1,
                          7: -1,
                      },
                  },
                  {
                      text: 'It is our best guide: the accumulation of human knowledge has taken us further than we would have thought possible',
                      general: {
                          subdivided: {
                              nerve: {
                                  actual: {
                                      contents: true,
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: -1,
                          3: 1,
                          4: 0.5,
                          5: 1,
                          6: -0.25,
                          7: 0.5,
                      },
                  },
                  {
                      text: 'It is A guide, but very incomplete; the accumulation of human knowledge has brought us to the brink of annihilation',
                      general: {
                          subdivided: {
                              nerve: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                          3: 0.25,
                          5: 1,
                          6: 0.25,
                          7: 0.75
                      },
                  },
                  {
                      text: 'It is noble (perceiving the truth is good in itself, whether it leads to good or not)',
                      general: {
                          subdivided: {
                              nerve: {
                                  actual: {
                                      contents: true,
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                          3: 1,
                          4: 1,
                          5: 1,
                          6: 0.25,
                          7: 0.75,
                      },
                  },
                  {
                      text: 'It is heartless and elitist',
                      general: {
                          subdivided: {
                              nerve: {
                                  actual: {
                                      contents: true,
                                      salience: -1,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                          3: -1,
                          4: -1,
                          6: -1,
                          7: -0.75,
                      },
                  },
                  {
                      text: 'It is fun but useless.',
                      general: {
                          subdivided: {
                              nerve: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: 1,
                          1: -1,
                          2: 1,
                          3: 0.25,
                      },
                  },
              ],
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'I wish I were',
              questionEnd: 'tethered to reality.',
              left: 'less',
              right: 'more',
              general: {
                  subdivided: {
                      bone: {
                          ideal: {
                              salience: 1,
                          },
                      },
                  },
                  //salience of the shadow
              },
              particular: {
                  result: 2,
                  leftIsPositive: true,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'We so often',
              questionEnd: 'our appetites when we shouldn\'t',
              left: 'suppress',
              right: 'follow',
              general: {
                  subdivided: {
                      belly: {
                          ideal: {
                              salience: 1,
                          },
                      },
                  },
                  //salience of the shadow
              },
              particular: {
                  result: 0,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'In a perfect world, we',
              questionEnd: 'have to go eat, sleep, and go to the bathroom.',
              left: 'would not',
              right: 'would',
              general: {
                  subdivided: {
                      bone: {
                          ideal: {
                              contents: true,
                          },
                      },
                  },
                 //salience of the shadow
              },
              particular: {
                  result: 7,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'In a perfect world, we',
              left: 'could choose when and whether we die',
              right: 'would live forever whether we wanted to or not',
              general: {
                  subdivided: {
                      bone: {
                          ideal: {
                              contents: true,
                          },
                      },
                  },
                   //salience of the shadow
              },
              particular: {
                  result: 1,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'In a perfect world, we',
              left: 'could be whatever we chose',
              right: 'would be whatever our deepest nature dictated',
              general: {
                  subdivided: {
                      bone: {
                          ideal: {
                              contents: true,
                          },
                      },
                  },
              },
              particular: {
                  result: 1,
              },
          },
          {
              type: QUESTION_TYPES.slider,
              question: 'In a perfect world, we',
              questionEnd: 'have physical bodies',
              left: 'would',
              right: 'would not',
              general: {
                  subdivided: {
                      bone: {
                          ideal: {
                              contents: true,
                          },
                      },
                  },
              },
              particular: {
                  result: 7,
              },
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'I notice most strongly',
              options: [
                  {
                      text: 'Details about people',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: 1,
                          1: 0.25,
                          2: 0.5,
                          4: -0.25,
                          6: 1,
                          7: -1,
                      },
                  },
                  {
                      text: 'How I feel about people',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              heart: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                      },
                      particular: {
                          1: 0.5,
                          2: 0.5,
                          3: -0.5,
                          4: 1,
                          5: 0.5,
                          6: 0.25,
                          7: -1,
                      },
                  },
                  {
                      text: 'People\'s ideas',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              nerve: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                      },
                      particular: {
                          1: 1,
                          3: 1,
                          4: 0.25,
                          5: 1,
                          6: 0.25,
                          7: 1,                            
                      },
                  },
                  {
                      text: 'Nature, the moods',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              heart: {
                                  actual: {
                                      salience: 1,
                                  }
                              }
                          },
                      },
                      particular: {
                          0: -1,
                          1: 1,
                          2: -0.25,
                          3: -0.5,
                          4: 1,
                          5: 1,
                          7: -0.5,
                      },
                  },
                  {
                      text: 'Nature, the specifics',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          2: -0.5,
                          3: 1,
                          4: 1,
                          5: 0.5,
                          7: 0.25,
                      },
                  },
                  {
                      text: 'Human-made things and systems',
                      
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          2: 0.25,
                          3: 1,
                          5: 0.25,
                          6: 0.25,
                          7: 1,
                      },
                  }
              ],
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'The most lovable and moving things are:',
              options: [
                  {
                      text: 'The love between parent and child',
                      general: {
                          subdivided: {
                              heart: {
                                  actual: {
                                      contents: true,
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 1,
                          4: 0.25,
                          5: 1,
                          7: -0.5,
                      },
                  },
                  {
                      text: 'Nature',
                      general: {
                          subdivided: {
                              heart: {
                                  actual: {
                                      contents: true,
                                      salience: 1,
                                  },
                              },
                              eye: {
                                  actual: {
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: -1,
                          1: 1,
                          2: -.25,
                          3: 0.25,
                          4: 1,
                          5: 0.5,
                          7: -0.5,
                      },
                  },
                  {
                      text: 'Sacrifice',
                      general: {
                          subdivided: {
                              heart: {
                                  actual: {
                                      contents: true,
                                      salience: 1,
                                  },
                              },
                              hand: {
                                abstract: {
                                  salience: 1,
                                },
                              },
                          },
                      },
                      particular: {
                          0: -1,
                          1: 1,
                          4: 0.5,
                          5: 1,
                          6: 0.5,
                          7: 0.25,
                      },
                  },
                  {
                      text: 'Success against the odds',
                      general: {
                          subdivided: {
                              heart: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: 1,
                          1: -0.5,
                          3: 0.25,
                          4: -0.25,
                          5: 1,
                          6: -0.5,
                          7: -0.25,
                      },
                  },
                  {
                      text: 'Small and sincere acts of kindness',
                      general: {
                          subdivided: {
                              heart: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: 0.5,
                          1: 1,
                          4: 1,
                          5: 1,
                          6: -0.25,
                      },
                  },
                  {
                      text: 'Great art',
                      general: {
                          subdivided: {
                              heart: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                              eye: {
                                  actual: {
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          2: 1,
                          4: 1,
                          5: 0.5,
                          6: 1,
                      },
                  },
                  {
                      text: 'Finding true love',
                      general: {
                          subdivided: {
                              heart: {
                                  actual: {
                                      contents: true,
                                      salience: 1,
                                  },
                              },
                          },
                      },
                      particular: {
                          4: 1,
                          6: 0.25,
                          7: -1,
                      },
                  },
                  {
                      text: 'Courage against oppression',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          3: 0.25,
                          4: 0.25,
                          5: 0.5,
                          6: -0.25,
                          7: -0.25,
                      },
                  },
              ],
          },
          {
              type: QUESTION_TYPES.rank,
              question: 'What kind of food are you?',
              options: [
                  {
                      text: 'Artisanal cheese and fine wine',
                      general: {
                          subdivided: {
                              belly: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: -1,
                          2: 0.25,
                          3: -0.5,
                          4: 1,
                          5: 0.5,
                          6: 1,
                          7: -1,
                      },
                  },
                  {
                      text: 'Meat and potatoes',
                      general: {
                          subdivided: {
                              belly: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: 0.5,
                          1: 1,
                          2: -1,
                          3: 0.25,
                          4: -1,
                          5: 0.5,
                          6: -0.5,
                      },
                  },
                  {
                      text: 'Potato chips',
                      general: {
                          subdivided: {
                              belly: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: 1,
                          1: -1,
                          2: -0.5,
                          3: 0.25,
                          4: -1,
                          5: -1,
                          6: -1,
                          7: -0.5,
                      },
                  },
                  {
                      text: 'Fruit',
                      
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          1: 0.25,
                          2: 0.5,
                          4: 1,
                          5: 1,
                          6: -0.25,
                          7: -0.5,
                      },
                  },
                  {
                      text: 'Nutritionally optimized vat-grown something',
                      general: {
                          subdivided: {
                              eye: {
                                  actual: {
                                      contents: true,
                                  },
                              },
                          },
                      },
                      particular: {
                          0: -1,
                          1: -1,
                          3: 1,
                          4: -1,
                          5: -1,
                          6: -1,
                          7: 1,
                      },
                  },
              ],
          },
      ]
  },
];


