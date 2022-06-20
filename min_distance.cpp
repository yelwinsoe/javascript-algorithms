#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
  int shortestDistance(vector<string>& wordsDict, string word1, string word2) {
    int w1Idx = 1e9;
    int w2Idx = -1e9;
    int distance = wordsDict.size();

    for (int i=0; i<wordsDict.size(); i++) {
      if (wordsDict[i] == word1) {
        w1Idx = i;
      } else if (wordsDict[i] == word2) {
        w2Idx = i;
      }

      if (w1Idx != 1e9 && w2Idx != -1e9) {
        std::cout << w1Idx << " : " << w2Idx << std::endl;
        distance = min(abs(w2Idx - w1Idx), distance);
      }
    }

    return distance;

  }
};

int main()
{
  Solution so;
  vector<string> words = {"practice", "makes", "perfect", "skill", "makes", "coding"};
  int result = so.shortestDistance(words, "perfect", "coding");
  std::cout << "Shortest distance : " << result << std::endl;
}