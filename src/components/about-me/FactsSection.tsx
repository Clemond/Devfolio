import FactBubble from "./FactBubble";

export default function FactsSection() {
  return (
    <div>
      <p className="flex justify-center text-xl italic">Fun facts:</p>
      <div className=" flex flex-row justify-around px-14 ">
        <FactBubble
          title={"Chess Champion"}
          text={
            "When I was 10 years old, I won Sweden's biggest chess tournament for 4th graders, 'Schack4an', representing my school, Lilla Akademien. The final took place in Avicii Arena in Stockholm, making it an unforgettable experience"
          }
        />
        <FactBubble
          title={"Musical Journey"}
          text={
            "When I was 4, my parents enrolled me in a music school where I chose the piano (or maybe my mom did!). I later joined a blues rock band called Ranston, released an LP and music videos, and had our songs played on radio stations in Mexico and Germany. I also produce music in Logic Pro X, create R&B tracks, and play guitar, sing, and violin"
          }
        />
        <FactBubble
          title={"Bookworm Arc"}
          text={
            "When I was in my early twenties, I went from hating reading to loving it. Horror and mystery became my favorite genres, and Stephen King quickly became my favorite author for his deep characters and incredible world-building. The longest book I've ever read was It, which was over 1,600 pages—definitely a challenge, but worth every page!"
          }
        />
        <FactBubble
          title={"From Bowls to Slopes"}
          text={
            "When I was younger, my friends and I took our skateboards everywhere—we skated all the time. One day, while riding a bowl, I took a bad fall and cracked my wrist. Since I was studying piano at the time, the injury made me rethink skating, and I never really got back into it. Luckily, I still get my fix on a snowboard instead!"
          }
        />
      </div>
    </div>
  );
}
