#include <iostream>
#include <vector>
#include <chrono>

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
        std::cout << "Word1 Index : " << w1Idx << " : Word2 Index " << w2Idx << std::endl;
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
  int t1 = std::chrono::system_clock::now().time_since_epoch().count();
  int result = so.shortestDistance(words, "perfect", "coding");
  int t2 = std::chrono::system_clock::now().time_since_epoch().count();
  int tt = t2 - t1;
  std::cout << "Shortest distance : " << result << ", Time took : " << tt << "ms" << std::endl;
}