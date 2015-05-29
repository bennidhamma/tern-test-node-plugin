/***************************************************************************************
 * 
 * 
 *          This file is auto-generated. Do not edit.
 *
 *
 *****************************************************************************************/

/** @const */
var ScoutData = {};

ScoutData.ForumTopicMetaData = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    id: {
      get: () => this._json_.id,
      set: v => this._json_.id = v && v._json_ ? v._json_ : v
    },
    thread: {
      get: () => new ScoutData.Thread(this._json_.thread),
      set: v => this._json_.thread = v && v._json_ ? v._json_ : v
    },
    forum: {
      get: () => new ScoutData.Forum(this._json_.forum),
      set: v => this._json_.forum = v && v._json_ ? v._json_ : v
    },
    site: {
      get: () => new ScoutData.Site(this._json_.site),
      set: v => this._json_.site = v && v._json_ ? v._json_ : v
    },
    announcementHeader: {
      get: () => new ScoutData.AnnouncementHeader(this._json_.announcementHeader),
      set: v => this._json_.announcementHeader = v && v._json_ ? v._json_ : v
    },
    announcementFooter: {
      get: () => new ScoutData.AnnouncementFooter(this._json_.announcementFooter),
      set: v => this._json_.announcementFooter = v && v._json_ ? v._json_ : v
    },
    webServer: {
      get: () => new ScoutData.WebServer(this._json_.webServer),
      set: v => this._json_.webServer = v && v._json_ ? v._json_ : v
    },
    dateOverride: {
      get: () => this._json_.dateOverride,
      set: v => this._json_.dateOverride = v && v._json_ ? v._json_ : v
    },
    siteId: {
      get: () => this._json_.siteId,
      set: v => this._json_.siteId = v && v._json_ ? v._json_ : v
    },
    siteName: {
      get: () => this._json_.siteName,
      set: v => this._json_.siteName = v && v._json_ ? v._json_ : v
    },
    viewStats: {
      get: () => this._json_.viewStats ? this._json_.viewStats.map(x => new ScoutData.ViewStats(x)) : null,
      set: v => this._json_.viewStats = v && v._json_ ? v._json_ : v
    },
    notice: {
      get: () => new ScoutData.ForumNotice(this._json_.notice),
      set: v => this._json_.notice = v && v._json_ ? v._json_ : v
    },
    type: {
      get: () => this._json_.type,
      set: v => this._json_.type = v && v._json_ ? v._json_ : v
    },
    containerType: {
      get: () => this._json_.containerType,
      set: v => this._json_.containerType = v && v._json_ ? v._json_ : v
    },
    forumName: {
      get: () => this._json_.forumName,
      set: v => this._json_.forumName = v && v._json_ ? v._json_ : v
    },
    isPublicSite: {
      get: () => this._json_.isPublicSite,
      set: v => this._json_.isPublicSite = v && v._json_ ? v._json_ : v
    },
    isActive: {
      get: () => this._json_.isActive,
      set: v => this._json_.isActive = v && v._json_ ? v._json_ : v
    },
    isPremium: {
      get: () => this._json_.isPremium,
      set: v => this._json_.isPremium = v && v._json_ ? v._json_ : v
    },
    indexDateTimeUTC: {
      get: () => this._json_.indexDateTimeUTC,
      set: v => this._json_.indexDateTimeUTC = v && v._json_ ? v._json_ : v
    },
    tags: {
      get: () => this._json_.tags ? this._json_.tags.map(x => new ScoutData.Tag(x)) : null,
      set: v => this._json_.tags = v && v._json_ ? v._json_ : v
    },
    statusCode: {
      get: () => this._json_.statusCode,
      set: v => this._json_.statusCode = v && v._json_ ? v._json_ : v
    },
    reason: {
      get: () => this._json_.reason,
      set: v => this._json_.reason = v && v._json_ ? v._json_ : v
    },
    redirectUrl: {
      get: () => this._json_.redirectUrl,
      set: v => this._json_.redirectUrl = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.Boardgame = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    id: {
      get: () => this._json_.id,
      set: v => this._json_.id = v && v._json_ ? v._json_ : v
    },
    bggId: {
      get: () => this._json_.bggId,
      set: v => this._json_.bggId = v && v._json_ ? v._json_ : v
    },
    title: {
      get: () => this._json_.title,
      set: v => this._json_.title = v && v._json_ ? v._json_ : v
    },
    primaryPhotoUrl: {
      get: () => this._json_.primaryPhotoUrl,
      set: v => this._json_.primaryPhotoUrl = v && v._json_ ? v._json_ : v
    },
    description: {
      get: () => this._json_.description,
      set: v => this._json_.description = v && v._json_ ? v._json_ : v
    },
    authors: {
      get: () => this._json_.authors,
      set: v => this._json_.authors = v && v._json_ ? v._json_ : v
    },
    numberOfPlayers: {
      get: () => new ScoutData.Range(this._json_.numberOfPlayers),
      set: v => this._json_.numberOfPlayers = v && v._json_ ? v._json_ : v
    },
    expansions: {
      get: () => this._json_.expansions ? this._json_.expansions.map(x => new ScoutData.BoardgameInfo(x)) : null,
      set: v => this._json_.expansions = v && v._json_ ? v._json_ : v
    },
    categories: {
      get: () => this._json_.categories,
      set: v => this._json_.categories = v && v._json_ ? v._json_ : v
    },
    honors: {
      get: () => this._json_.honors,
      set: v => this._json_.honors = v && v._json_ ? v._json_ : v
    },
    yearMade: {
      get: () => this._json_.yearMade,
      set: v => this._json_.yearMade = v && v._json_ ? v._json_ : v
    },
    playingTimeInMinutes: {
      get: () => this._json_.playingTimeInMinutes,
      set: v => this._json_.playingTimeInMinutes = v && v._json_ ? v._json_ : v
    },
    rank: {
      get: () => this._json_.rank,
      set: v => this._json_.rank = v && v._json_ ? v._json_ : v
    },
    rating: {
      get: () => new ScoutData.RatingStats(this._json_.rating),
      set: v => this._json_.rating = v && v._json_ ? v._json_ : v
    },
    officialUrl: {
      get: () => this._json_.officialUrl,
      set: v => this._json_.officialUrl = v && v._json_ ? v._json_ : v
    },
    family: {
      get: () => this._json_.family,
      set: v => this._json_.family = v && v._json_ ? v._json_ : v
    },
    uri: {
      get: () => this._json_.uri,
      set: v => this._json_.uri = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.Thread = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    id: {
      get: () => this._json_.id,
      set: v => this._json_.id = v && v._json_ ? v._json_ : v
    },
    previousTopic: {
      get: () => this._json_.previousTopic,
      set: v => this._json_.previousTopic = v && v._json_ ? v._json_ : v
    },
    previousTopicSubject: {
      get: () => this._json_.previousTopicSubject,
      set: v => this._json_.previousTopicSubject = v && v._json_ ? v._json_ : v
    },
    nextTopic: {
      get: () => this._json_.nextTopic,
      set: v => this._json_.nextTopic = v && v._json_ ? v._json_ : v
    },
    nextTopicSubject: {
      get: () => this._json_.nextTopicSubject,
      set: v => this._json_.nextTopicSubject = v && v._json_ ? v._json_ : v
    },
    currentPage: {
      get: () => this._json_.currentPage,
      set: v => this._json_.currentPage = v && v._json_ ? v._json_ : v
    },
    totalPages: {
      get: () => this._json_.totalPages,
      set: v => this._json_.totalPages = v && v._json_ ? v._json_ : v
    },
    totalMessages: {
      get: () => this._json_.totalMessages,
      set: v => this._json_.totalMessages = v && v._json_ ? v._json_ : v
    },
    lastPostDate: {
      get: () => this._json_.lastPostDate,
      set: v => this._json_.lastPostDate = v && v._json_ ? v._json_ : v
    },
    viewModeBlog: {
      get: () => this._json_.viewModeBlog,
      set: v => this._json_.viewModeBlog = v && v._json_ ? v._json_ : v
    },
    statusStickyLockedFull: {
      get: () => this._json_.statusStickyLockedFull,
      set: v => this._json_.statusStickyLockedFull = v && v._json_ ? v._json_ : v
    },
    canReplyQuickReply: {
      get: () => this._json_.canReplyQuickReply,
      set: v => this._json_.canReplyQuickReply = v && v._json_ ? v._json_ : v
    },
    firstMessageId: {
      get: () => this._json_.firstMessageId,
      set: v => this._json_.firstMessageId = v && v._json_ ? v._json_ : v
    },
    firstMessageSubject: {
      get: () => this._json_.firstMessageSubject,
      set: v => this._json_.firstMessageSubject = v && v._json_ ? v._json_ : v
    },
    subThreadMessageId: {
      get: () => this._json_.subThreadMessageId,
      set: v => this._json_.subThreadMessageId = v && v._json_ ? v._json_ : v
    },
    expirationDate: {
      get: () => this._json_.expirationDate,
      set: v => this._json_.expirationDate = v && v._json_ ? v._json_ : v
    },
    messagePosts: {
      get: () => this._json_.messagePosts ? this._json_.messagePosts.map(x => new ScoutData.MessagePost(x)) : null,
      set: v => this._json_.messagePosts = v && v._json_ ? v._json_ : v
    },
    post: {
      get: () => new ScoutData.MessagePost(this._json_.post),
      set: v => this._json_.post = v && v._json_ ? v._json_ : v
    },
    isSticky: {
      get: () => this._json_.isSticky,
      set: v => this._json_.isSticky = v && v._json_ ? v._json_ : v
    },
    isLocked: {
      get: () => this._json_.isLocked,
      set: v => this._json_.isLocked = v && v._json_ ? v._json_ : v
    },
    isFull: {
      get: () => this._json_.isFull,
      set: v => this._json_.isFull = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.Forum = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    id: {
      get: () => this._json_.id,
      set: v => this._json_.id = v && v._json_ ? v._json_ : v
    },
    name: {
      get: () => this._json_.name,
      set: v => this._json_.name = v && v._json_ ? v._json_ : v
    },
    shortName: {
      get: () => this._json_.shortName,
      set: v => this._json_.shortName = v && v._json_ ? v._json_ : v
    },
    description: {
      get: () => this._json_.description,
      set: v => this._json_.description = v && v._json_ ? v._json_ : v
    },
    topics: {
      get: () => this._json_.topics,
      set: v => this._json_.topics = v && v._json_ ? v._json_ : v
    },
    posts: {
      get: () => this._json_.posts,
      set: v => this._json_.posts = v && v._json_ ? v._json_ : v
    },
    pendingMessagesCount: {
      get: () => this._json_.pendingMessagesCount,
      set: v => this._json_.pendingMessagesCount = v && v._json_ ? v._json_ : v
    },
    questionableMessagesCount: {
      get: () => this._json_.questionableMessagesCount,
      set: v => this._json_.questionableMessagesCount = v && v._json_ ? v._json_ : v
    },
    postOfTheDayNomineesCount: {
      get: () => this._json_.postOfTheDayNomineesCount,
      set: v => this._json_.postOfTheDayNomineesCount = v && v._json_ ? v._json_ : v
    },
    archivedTopicsQueueIsFull: {
      get: () => this._json_.archivedTopicsQueueIsFull,
      set: v => this._json_.archivedTopicsQueueIsFull = v && v._json_ ? v._json_ : v
    },
    isPrivateForum: {
      get: () => this._json_.isPrivateForum,
      set: v => this._json_.isPrivateForum = v && v._json_ ? v._json_ : v
    },
    lastPostDate: {
      get: () => this._json_.lastPostDate,
      set: v => this._json_.lastPostDate = v && v._json_ ? v._json_ : v
    },
    lastPostBy: {
      get: () => this._json_.lastPostBy,
      set: v => this._json_.lastPostBy = v && v._json_ ? v._json_ : v
    },
    lastPostId: {
      get: () => this._json_.lastPostId,
      set: v => this._json_.lastPostId = v && v._json_ ? v._json_ : v
    },
    lastReadPostId: {
      get: () => this._json_.lastReadPostId,
      set: v => this._json_.lastReadPostId = v && v._json_ ? v._json_ : v
    },
    currentUserPermissionsEnumeration: {
      get: () => this._json_.currentUserPermissionsEnumeration,
      set: v => this._json_.currentUserPermissionsEnumeration = v && v._json_ ? v._json_ : v
    },
    forumModerators: {
      get: () => this._json_.forumModerators ? this._json_.forumModerators.map(x => new ScoutData.ForumModerator(x)) : null,
      set: v => this._json_.forumModerators = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.Site = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    id: {
      get: () => this._json_.id,
      set: v => this._json_.id = v && v._json_ ? v._json_ : v
    },
    name: {
      get: () => this._json_.name,
      set: v => this._json_.name = v && v._json_ ? v._json_ : v
    },
    backgroundColor: {
      get: () => this._json_.backgroundColor,
      set: v => this._json_.backgroundColor = v && v._json_ ? v._json_ : v
    },
    chatUrl: {
      get: () => this._json_.chatUrl,
      set: v => this._json_.chatUrl = v && v._json_ ? v._json_ : v
    },
    subdomain: {
      get: () => this._json_.subdomain,
      set: v => this._json_.subdomain = v && v._json_ ? v._json_ : v
    },
    friendlySubdomain: {
      get: () => this._json_.friendlySubdomain,
      set: v => this._json_.friendlySubdomain = v && v._json_ ? v._json_ : v
    },
    expandOnlineUsersYesNo: {
      get: () => this._json_.expandOnlineUsersYesNo,
      set: v => this._json_.expandOnlineUsersYesNo = v && v._json_ ? v._json_ : v
    },
    onlineUsersYesTopNoBottom: {
      get: () => this._json_.onlineUsersYesTopNoBottom,
      set: v => this._json_.onlineUsersYesTopNoBottom = v && v._json_ ? v._json_ : v
    },
    displaySubscriberBadge: {
      get: () => this._json_.displaySubscriberBadge,
      set: v => this._json_.displaySubscriberBadge = v && v._json_ ? v._json_ : v
    },
    displaySubscriberPostUserRatings: {
      get: () => this._json_.displaySubscriberPostUserRatings,
      set: v => this._json_.displaySubscriberPostUserRatings = v && v._json_ ? v._json_ : v
    },
    displayBannersYesNo: {
      get: () => this._json_.displayBannersYesNo,
      set: v => this._json_.displayBannersYesNo = v && v._json_ ? v._json_ : v
    },
    promoMagazineUrl: {
      get: () => this._json_.promoMagazineUrl,
      set: v => this._json_.promoMagazineUrl = v && v._json_ ? v._json_ : v
    },
    customTextColor: {
      get: () => this._json_.customTextColor,
      set: v => this._json_.customTextColor = v && v._json_ ? v._json_ : v
    },
    customLinkColor: {
      get: () => this._json_.customLinkColor,
      set: v => this._json_.customLinkColor = v && v._json_ ? v._json_ : v
    },
    customRow1Color: {
      get: () => this._json_.customRow1Color,
      set: v => this._json_.customRow1Color = v && v._json_ ? v._json_ : v
    },
    customRow2Color: {
      get: () => this._json_.customRow2Color,
      set: v => this._json_.customRow2Color = v && v._json_ ? v._json_ : v
    },
    customBorderColor: {
      get: () => this._json_.customBorderColor,
      set: v => this._json_.customBorderColor = v && v._json_ ? v._json_ : v
    },
    customVisitedLinkColor: {
      get: () => this._json_.customVisitedLinkColor,
      set: v => this._json_.customVisitedLinkColor = v && v._json_ ? v._json_ : v
    },
    timeZoneDisplayName: {
      get: () => this._json_.timeZoneDisplayName,
      set: v => this._json_.timeZoneDisplayName = v && v._json_ ? v._json_ : v
    },
    timeZoneOffsetHoursFromServers: {
      get: () => this._json_.timeZoneOffsetHoursFromServers,
      set: v => this._json_.timeZoneOffsetHoursFromServers = v && v._json_ ? v._json_ : v
    },
    currentUserPermissionsEnumeration: {
      get: () => this._json_.currentUserPermissionsEnumeration,
      set: v => this._json_.currentUserPermissionsEnumeration = v && v._json_ ? v._json_ : v
    },
    pendingUserQueueLength: {
      get: () => this._json_.pendingUserQueueLength,
      set: v => this._json_.pendingUserQueueLength = v && v._json_ ? v._json_ : v
    },
    chatUserCount: {
      get: () => this._json_.chatUserCount,
      set: v => this._json_.chatUserCount = v && v._json_ ? v._json_ : v
    },
    siteLevel: {
      get: () => this._json_.siteLevel,
      set: v => this._json_.siteLevel = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.AnnouncementHeader = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    announcementId: {
      get: () => this._json_.announcementId,
      set: v => this._json_.announcementId = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.AnnouncementFooter = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    announcementId: {
      get: () => this._json_.announcementId,
      set: v => this._json_.announcementId = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.WebServer = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    name: {
      get: () => this._json_.name,
      set: v => this._json_.name = v && v._json_ ? v._json_ : v
    },
    pathToCode: {
      get: () => this._json_.pathToCode,
      set: v => this._json_.pathToCode = v && v._json_ ? v._json_ : v
    },
    debug: {
      get: () => this._json_.debug,
      set: v => this._json_.debug = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.ViewStats = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    from: {
      get: () => this._json_.from,
      set: v => this._json_.from = v && v._json_ ? v._json_ : v
    },
    to: {
      get: () => this._json_.to,
      set: v => this._json_.to = v && v._json_ ? v._json_ : v
    },
    count: {
      get: () => this._json_.count,
      set: v => this._json_.count = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.ForumNotice = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    noticeLevel: {
      get: () => this._json_.noticeLevel,
      set: v => this._json_.noticeLevel = v && v._json_ ? v._json_ : v
    },
    isPositive: {
      get: () => this._json_.isPositive,
      set: v => this._json_.isPositive = v && v._json_ ? v._json_ : v
    },
    text: {
      get: () => this._json_.text,
      set: v => this._json_.text = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.Tag = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    id: {
      get: () => this._json_.id,
      set: v => this._json_.id = v && v._json_ ? v._json_ : v
    },
    name: {
      get: () => this._json_.name,
      set: v => this._json_.name = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.Range = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    from: {
      get: () => this._json_.from,
      set: v => this._json_.from = v && v._json_ ? v._json_ : v
    },
    to: {
      get: () => this._json_.to,
      set: v => this._json_.to = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.BoardgameInfo = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    id: {
      get: () => this._json_.id,
      set: v => this._json_.id = v && v._json_ ? v._json_ : v
    },
    title: {
      get: () => this._json_.title,
      set: v => this._json_.title = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.RatingStats = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    count: {
      get: () => this._json_.count,
      set: v => this._json_.count = v && v._json_ ? v._json_ : v
    },
    average: {
      get: () => this._json_.average,
      set: v => this._json_.average = v && v._json_ ? v._json_ : v
    },
    ratingCounts: {
      get: () => this._json_.ratingCounts ? this._json_.ratingCounts.map(x => new ScoutData.RatingCountBucket(x)) : null,
      set: v => this._json_.ratingCounts = v && v._json_ ? v._json_ : v
    },
    score: {
      get: () => this._json_.score,
      set: v => this._json_.score = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.MessagePost = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    topicId: {
      get: () => this._json_.topicId,
      set: v => this._json_.topicId = v && v._json_ ? v._json_ : v
    },
    messageId: {
      get: () => this._json_.messageId,
      set: v => this._json_.messageId = v && v._json_ ? v._json_ : v
    },
    currentUserPermissionsEnumeration: {
      get: () => this._json_.currentUserPermissionsEnumeration,
      set: v => this._json_.currentUserPermissionsEnumeration = v && v._json_ ? v._json_ : v
    },
    messageHeader: {
      get: () => new ScoutData.MessageHeader(this._json_.messageHeader),
      set: v => this._json_.messageHeader = v && v._json_ ? v._json_ : v
    },
    author: {
      get: () => new ScoutData.Author(this._json_.author),
      set: v => this._json_.author = v && v._json_ ? v._json_ : v
    },
    messageBody: {
      get: () => new ScoutData.MessageBody(this._json_.messageBody),
      set: v => this._json_.messageBody = v && v._json_ ? v._json_ : v
    },
    authorSignature: {
      get: () => new ScoutData.AuthorSignature(this._json_.authorSignature),
      set: v => this._json_.authorSignature = v && v._json_ ? v._json_ : v
    },
    topicLog: {
      get: () => new ScoutData.TopicLog(this._json_.topicLog),
      set: v => this._json_.topicLog = v && v._json_ ? v._json_ : v
    },
    messageLog: {
      get: () => new ScoutData.MessageLog(this._json_.messageLog),
      set: v => this._json_.messageLog = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.ForumModerator = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    name: {
      get: () => this._json_.name,
      set: v => this._json_.name = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.RatingCountBucket = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    rating: {
      get: () => this._json_.rating,
      set: v => this._json_.rating = v && v._json_ ? v._json_ : v
    },
    count: {
      get: () => this._json_.count,
      set: v => this._json_.count = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.MessageHeader = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    id: {
      get: () => this._json_.id,
      set: v => this._json_.id = v && v._json_ ? v._json_ : v
    },
    subject: {
      get: () => this._json_.subject,
      set: v => this._json_.subject = v && v._json_ ? v._json_ : v
    },
    postDate: {
      get: () => this._json_.postDate,
      set: v => this._json_.postDate = v && v._json_ ? v._json_ : v
    },
    authorHandle: {
      get: () => this._json_.authorHandle,
      set: v => this._json_.authorHandle = v && v._json_ ? v._json_ : v
    },
    previewText: {
      get: () => this._json_.previewText,
      set: v => this._json_.previewText = v && v._json_ ? v._json_ : v
    },
    containsPoll: {
      get: () => this._json_.containsPoll,
      set: v => this._json_.containsPoll = v && v._json_ ? v._json_ : v
    },
    replies: {
      get: () => this._json_.replies,
      set: v => this._json_.replies = v && v._json_ ? v._json_ : v
    },
    views: {
      get: () => this._json_.views,
      set: v => this._json_.views = v && v._json_ ? v._json_ : v
    },
    ranking: {
      get: () => this._json_.ranking,
      set: v => this._json_.ranking = v && v._json_ ? v._json_ : v
    },
    rankingCount: {
      get: () => this._json_.rankingCount,
      set: v => this._json_.rankingCount = v && v._json_ ? v._json_ : v
    },
    statusDeleted: {
      get: () => this._json_.statusDeleted,
      set: v => this._json_.statusDeleted = v && v._json_ ? v._json_ : v
    },
    lastEditedDate: {
      get: () => this._json_.lastEditedDate,
      set: v => this._json_.lastEditedDate = v && v._json_ ? v._json_ : v
    },
    lastEditUserHandle: {
      get: () => this._json_.lastEditUserHandle,
      set: v => this._json_.lastEditUserHandle = v && v._json_ ? v._json_ : v
    },
    nestedMessageHeader: {
      get: () => new ScoutData.MessageHeader(this._json_.nestedMessageHeader),
      set: v => this._json_.nestedMessageHeader = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.Author = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    authorData: {
      get: () => new ScoutData.AuthorData(this._json_.authorData),
      set: v => this._json_.authorData = v && v._json_ ? v._json_ : v
    },
    overallScoutRating: {
      get: () => new ScoutData.OverallScoutRating(this._json_.overallScoutRating),
      set: v => this._json_.overallScoutRating = v && v._json_ ? v._json_ : v
    },
    currentSiteRating: {
      get: () => new ScoutData.CurrentSiteRating(this._json_.currentSiteRating),
      set: v => this._json_.currentSiteRating = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.MessageBody = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    body: {
      get: () => this._json_.body,
      set: v => this._json_.body = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.AuthorSignature = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    signature: {
      get: () => this._json_.signature,
      set: v => this._json_.signature = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.TopicLog = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    entries: {
      get: () => this._json_.entries ? this._json_.entries.map(x => new ScoutData.Entry(x)) : null,
      set: v => this._json_.entries = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.MessageLog = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    entries: {
      get: () => this._json_.entries ? this._json_.entries.map(x => new ScoutData.Entry(x)) : null,
      set: v => this._json_.entries = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.AuthorData = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    name: {
      get: () => this._json_.name,
      set: v => this._json_.name = v && v._json_ ? v._json_ : v
    },
    privateMessageHandle: {
      get: () => this._json_.privateMessageHandle,
      set: v => this._json_.privateMessageHandle = v && v._json_ ? v._json_ : v
    },
    joinedDate: {
      get: () => this._json_.joinedDate,
      set: v => this._json_.joinedDate = v && v._json_ ? v._json_ : v
    },
    isPremiumMember: {
      get: () => this._json_.isPremiumMember,
      set: v => this._json_.isPremiumMember = v && v._json_ ? v._json_ : v
    },
    premiumSubscriberThisSite: {
      get: () => this._json_.premiumSubscriberThisSite,
      set: v => this._json_.premiumSubscriberThisSite = v && v._json_ ? v._json_ : v
    },
    userTimeZoneOffsetHoursFromServers: {
      get: () => this._json_.userTimeZoneOffsetHoursFromServers,
      set: v => this._json_.userTimeZoneOffsetHoursFromServers = v && v._json_ ? v._json_ : v
    },
    displayAvatars: {
      get: () => this._json_.displayAvatars,
      set: v => this._json_.displayAvatars = v && v._json_ ? v._json_ : v
    },
    memberHomePage: {
      get: () => this._json_.memberHomePage,
      set: v => this._json_.memberHomePage = v && v._json_ ? v._json_ : v
    },
    avatarUrl: {
      get: () => this._json_.avatarUrl,
      set: v => this._json_.avatarUrl = v && v._json_ ? v._json_ : v
    },
    userTimeZoneDisplayName: {
      get: () => this._json_.userTimeZoneDisplayName,
      set: v => this._json_.userTimeZoneDisplayName = v && v._json_ ? v._json_ : v
    },
    allowPrivateMessages: {
      get: () => this._json_.allowPrivateMessages,
      set: v => this._json_.allowPrivateMessages = v && v._json_ ? v._json_ : v
    },
    hideAvatars: {
      get: () => this._json_.hideAvatars,
      set: v => this._json_.hideAvatars = v && v._json_ ? v._json_ : v
    },
    hideSignatures: {
      get: () => this._json_.hideSignatures,
      set: v => this._json_.hideSignatures = v && v._json_ ? v._json_ : v
    },
    topicView: {
      get: () => this._json_.topicView,
      set: v => this._json_.topicView = v && v._json_ ? v._json_ : v
    },
    postSortOrderWithinTopic: {
      get: () => this._json_.postSortOrderWithinTopic,
      set: v => this._json_.postSortOrderWithinTopic = v && v._json_ ? v._json_ : v
    },
    ignoredUsers: {
      get: () => this._json_.ignoredUsers ? this._json_.ignoredUsers.map(x => new ScoutData.IgnoredUser(x)) : null,
      set: v => this._json_.ignoredUsers = v && v._json_ ? v._json_ : v
    },
    isSearchEngine: {
      get: () => this._json_.isSearchEngine,
      set: v => this._json_.isSearchEngine = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.OverallScoutRating = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    rating: {
      get: () => this._json_.rating,
      set: v => this._json_.rating = v && v._json_ ? v._json_ : v
    },
    posts: {
      get: () => this._json_.posts,
      set: v => this._json_.posts = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.CurrentSiteRating = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    siteRating: {
      get: () => this._json_.siteRating,
      set: v => this._json_.siteRating = v && v._json_ ? v._json_ : v
    },
    sitePosts: {
      get: () => this._json_.sitePosts,
      set: v => this._json_.sitePosts = v && v._json_ ? v._json_ : v
    },
    userTitle: {
      get: () => this._json_.userTitle,
      set: v => this._json_.userTitle = v && v._json_ ? v._json_ : v
    },
    lastLoginDate: {
      get: () => this._json_.lastLoginDate,
      set: v => this._json_.lastLoginDate = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.Entry = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    elementDate: {
      get: () => this._json_.elementDate,
      set: v => this._json_.elementDate = v && v._json_ ? v._json_ : v
    },
    standardDate: {
      get: () => this._json_.standardDate,
      set: v => this._json_.standardDate = v && v._json_ ? v._json_ : v
    },
    userHandle: {
      get: () => this._json_.userHandle,
      set: v => this._json_.userHandle = v && v._json_ ? v._json_ : v
    },
    userIPAddress: {
      get: () => this._json_.userIPAddress,
      set: v => this._json_.userIPAddress = v && v._json_ ? v._json_ : v
    },
    action: {
      get: () => this._json_.action,
      set: v => this._json_.action = v && v._json_ ? v._json_ : v
    }
  });
};

ScoutData.IgnoredUser = function (json) {
  this._json_ = json;
  Object.defineProperties(this, {
    name: {
      get: () => this._json_.name,
      set: v => this._json_.name = v && v._json_ ? v._json_ : v
    }
  });
};

module.exports = ScoutData;
