import repl from "repl";
import crypto from "crypto";

const replServer = repl.start({});

replServer.context.crypto = crypto;
