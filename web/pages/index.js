import ReactGA from 'react-ga';

const isDev = process.env.NODE_ENV !== 'production';
if(!isDev){
    ReactGA.initialize('UA-132999893-1', {
        debug: false,
        titleCase: false
    });
}

const Index = () => (
    <div className="content">
        <style jsx global>{`
            html, body {
                background-color: #2bb573;
                color: #fff;
                font-size: 1.2rem;
                line-height: 1.9rem;
                font-family: Helvetica;
            }
            .content{
                max-width: 700px;
                margin: 0 auto;
                }
                h1, h2, h3, h4 {
                text-align:center;
            }


            li {
                margin: 5px 0;
            }

            a {
                color: #fff;
            }

            a:hover {
                opacity: 0.6;
            }

            .logo {
                background-color: #fff;
                padding: 20px;
                width: 230px;
                height: 230px;
                text-align: center;
                margin: 0 auto;
                border-radius: 50%;
            }

            .download{
                text-align: center;
                background-color: #fff;
                color: #2bb573;
                display: block;
                max-width: 400px;
                text-decoration: none;
                padding: 20px;
                margin: 0 auto;
            }

            .footer{
                text-align: center;
                background-color: #fff;
                color: #2bb573;
            }

            .footer a{
                color: #2bb573;
            }
        `}
        </style>
        <div className="logo">
            <img src="/static/cactus.png" width="150" height="219" alt=""/>
        </div>
        <h1>Tag Your Track</h1>
        <h2>Tag your iTunes tracks</h2>
        <p>
            <ReactGA.OutboundLink
                className="download"
                eventLabel={"download:1.0"}
                to={"/static/tag-your-track-1.0.zip"}
                download
            >
                Download Tag Your Track here
            </ReactGA.OutboundLink>
        </p>
        <h3>The problem</h3>
        <p>When you create <a href="https://support.apple.com/en-gb/guide/itunes/use-smart-playlists-itns3001/mac" target="_blank">Smart Playlists</a> in iTunes you sometimes want to add tags or labels to your music to make it the playlist creation even more dynamic.
        </p>
        <p>Until now there has been no easy way to do this in iTunes.</p>


        <h3>The solutions</h3>
        <p>Tag your track lets you select multiple tracks and add or remove tags.</p>
        <p>
            Adding the tag <i>swedish</i> using Tag Your Track will add <code>tag:swedish</code> to the Grouping field to the track info.
            You can then create a Smart Playlist with the rule Grouping -> contains -> tag:swedish to include all you tagged tracks</p>
        <p>
            Adding an additional tag, say <i>finland</i> will make the grouping field of that track look like this <code>tag:swedish,tag:finland</code>.
            You can now create a Smart Playlist containing all you songs sung in Swedish but made in Finland by using the rule Grouping -> contains -> tag:swedish AND Grouping -> contains -> tag:finland
        </p>
        <p>
            <ReactGA.OutboundLink
                className="download"
                eventLabel={"download:1.0"}
                to={"/static/tag-your-track-1.0.zip"}
                download
            >
                Download Tag Your Track here
            </ReactGA.OutboundLink>
        </p>

        <h3>Installation</h3>
        <ol>
            <li>Download the zip file</li>
            <li>Unpack it</li>
            <li>
                Navigate to the [username]/Library/iTunes/ folder. <br/>
                If there is no folder named "Scripts" there, create one. <br/>
                Put your scripts in the "Scripts" folder
            </li>
            <li>You will no be able to see the scripts in iTunes' Scripts Menu</li>
            <li>Select one ore more tracks you want to tag and click on the script in the Scripts Menu (<a href="#shortcuts">or setup keyboard shortcuts</a>) and follow the guide</li>
        </ol>

        <h4>Show tags</h4>
        <p>The script bundle also includes a script (Show Tags.scpt) that shows the tags for selected tracks.</p>

        <h4>Running in to problem</h4>
        <p>You can get more help here <a href="https://dougscripts.com/itunes/itinfo/asitbasics.php" target="_blank">Running AppleScripts in iTunes</a></p>
        <p>On <a href="https://dougscripts.com" target="_blank">Doug's Apps for iTunes</a> you also find alot of other great scripts for iTunes</p>

        <h4 id="shortcuts">Setup keyboard shortcuts</h4>
        <p><a href="https://dougscripts.com/itunes/itinfo/shortcutkeys.php" target="_blank">Follow this guide to setup keyboard shortcuts</a></p>

        <h3>FAQ</h3>
        <p>Q: Will it overwrite my old data</p>
        <p>A: No, Tag Your Track will add tags after any old data in the Grouping field and separate it with ###</p>
        <hr/>
        <p>Q: Will it works on Windows</p>
        <p>A: No</p>
        <hr/>
        <p>Q: Why not just simply select the tracks you want edit and do the change in the info window</p>
        <p>A: This only works if the data in the info window field is the same for all tracks. If not your change will overwrite all the previous data.
            Tag Your Track makes it possible to add and remove a specific tag without overwriting other</p>
        <div className="footer">
            <p>Built by <a href="https://github.com/erikportin" target="_blank">Erik Portin</a>. Cactus by <a href="https://ellenportin.myportfolio.com/" target="_blank">Ellen Portin</a></p>
        </div>

    </div>
);

export default Index