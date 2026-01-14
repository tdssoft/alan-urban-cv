import React from 'react';
import { ExperienceItem } from './ExperienceItem';

export const ExperienceSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-primary mb-6">PROFESSIONAL EXPERIENCE</h2>

      <div className="space-y-6">
        <ExperienceItem
          title="iOS Developer"
          company="Zorro Delivery Sp. z o.o. (E-commerce), Warsaw"
          date="April 2023 - Present"
          responsibilities={[
            "Development and maintenance of LisekApp and Lisek Riders applications using UIKit, SwiftUI, Combine, async/await, CoreData",
            "Bug fixing and legacy code refactoring to improve performance, clarity and consistency",
            "Implementation of new features using native frameworks and third-party libraries",
            "Code review for every new feature and bug fix",
            "Publishing applications to App Store and test versions",
            "Technical debt analysis"
          ]}
          technologies={["SwiftUI", "UIKit", "Combine", "async/await", "Alamofire", "PayU_SDK_Lite", "Swinject", "Storyteller", "Firebase Push Notifications", "Firebase Performance", "Firebase Crashlytics", "AppsFlyer", "GoogleMaps", "MapKit", "Core Location", "Zendesk Messaging", "AVFoundation", "Notification Center", "SmartLook", "CoreData", "SPM", "CocoaPods"]}
        />

        <ExperienceItem
          title="iOS Developer"
          company="Neonin Sp. z o.o., Warsaw"
          date="February 2022 - February 2023"
          responsibilities={[
            "Updating, refactoring and bug fixing in legacy WP mail application built with UIKit technology",
            "Creating from scratch new WP Mail application for email management using SwiftUI, Combine, Composable Architecture, async/await",
            "Planning and implementing solutions compliant with project assumptions and client requirements",
            "Regular participation in online meetings with the client",
            "Conducting code reviews from other team members before adding changes to the project",
            "Analysis for planning changes for new iOS system versions",
            "Writing Unit tests",
            "Creating technical documentation"
          ]}
          technologies={["SwiftUI", "UIKit", "Combine", "Composable Architecture", "async/await", "CoreData", "UserDefaults", "SwiftGen", "SwiftLint", "KeychainSwift", "CocoaPods", "SPM"]}
        />

        <ExperienceItem
          title="iOS Developer"
          company="Concise Software, Rzeszów"
          date="October 2019 - September 2021"
          responsibilities={[
            "Development and maintenance of Let's Day Out app (currently Victoria) for creating social networks with social media and Tinder-like features",
            "Implementation of post creation, map events, photo adding and stories functionality",
            "Weekly online client meetings to communicate work status updates",
            "Conducting code reviews from other team members before adding changes to the project",
            "Development and maintenance of T-Cup app (currently WellCup) using UIKit, SwiftUI",
            "Development and maintenance of Weenect – GPS app using UIKit, SnapKit"
          ]}
          technologies={["RxSwift", "RxCocoa", "UIKit", "SwiftUI", "Alamofire", "Firebase", "Crashlytics", "Kingfisher", "Mapbox SDK", "SwiftGen", "SwiftlyJSON", "Fastlane", "CocoaPods", "AWS Auth SDK", "SwiftCharts", "Core Location", "Core Bluetooth", "Push Notifications"]}
        />

        <ExperienceItem
          title="iOS Developer"
          company="Salesbook, Rzeszów"
          date="August 2018 - September 2019"
          responsibilities={[
            "Development and maintenance of Mercedes-Benz presentation app for vehicle model showcase with slideshow and video presentations",
            "Development and maintenance of Mercedes-Benz vehicle configuration and delivery process application",
            "Development and maintenance of Dailyvery food ordering app with delivery tracking capabilities",
            "Development and maintenance of Kontigo drugstore chain application",
            "Development and maintenance of PicTime photo app with frames, stickers, editing and print ordering options",
            "Development and maintenance of NaviSail navigation app for Polish waters and rivers with weather forecasts, useful objects info and custom route algorithms",
            "Development of Polaris configuration app for pre-purchase customization and customer presentations",
            "Creating views for Santander application"
          ]}
          technologies={["UIKit", "RxSwift", "RxCocoa", "AVFoundation", "Core Data", "UserDefaults", "Keychain", "Apple Pay", "PayU SDK", "Alamofire", "Firebase Analytics", "Firebase Messaging", "Realm Swift", "Cocoa Pods", "SDWebImage", "SnapKit", "SwiftyJSON", "Core Location", "Firebase DynamicsLinks", "Kingfisher"]}
        />
      </div>
    </section>
  );
};
